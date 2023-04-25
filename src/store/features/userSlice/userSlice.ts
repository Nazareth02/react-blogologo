import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../../firebase";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { AuthFormValues, SingInFormValues } from "types";
import { FirebaseError } from "firebase/app";
import { FirebaseErrorMessage, getFirebaseErrorMessage } from "utils";

interface UserState {
  name: string | null;
  email: string | null;
  creationTime: string | null;
  isLoading: boolean;
  errorMessage: string | null;
  isAuth: boolean;
  uid: string | null;
}

export const fetchSignUpUser = createAsyncThunk<
  Pick<UserState, "email" | "creationTime" | "name">,
  AuthFormValues,
  { rejectValue: FirebaseErrorMessage }
>("user/fetchSignUpUser", async ({ email, password, userName }, { rejectWithValue }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const name = userName as string;
    await updateProfile(auth.currentUser as User, { displayName: name });

    return {
      email: user.email,
      creationTime: user.metadata.creationTime ?? null,
      name: user.displayName,
      uid: null,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchSignInUser = createAsyncThunk<
  Pick<UserState, "email" | "uid" | "name">,
  SingInFormValues,
  { rejectValue: FirebaseErrorMessage }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return {
      email: user.email,
      password: password,
      uid: user.uid,
      name: user.displayName,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

const initialState: UserState = {
  name: null,
  email: null,
  creationTime: null,
  isLoading: false,
  errorMessage: null,
  isAuth: false,
  uid: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserName: (state, action: PayloadAction<string>) => {
      if (action.payload) state.email = action.payload;
    },
    logOut: (state) => {
      state.isAuth = false;
    },
    setAuth: (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.displayName;
      state.creationTime = payload.metadata.creationTime;
      state.email = payload.email;
      state.uid = payload.uid;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      state.creationTime = payload.creationTime;
      state.isLoading = false;
      state.isAuth = true;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.errorMessage = payload;
      }
    });
  },
});

export const { updateUserName, setAuth, logOut } = userSlice.actions;
export default userSlice.reducer;
