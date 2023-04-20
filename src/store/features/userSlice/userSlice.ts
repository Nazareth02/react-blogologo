import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

interface UserState {
  email: string | null;
  creationTime: string | null;
  isLoading: boolean;
}

export const fetchSignUpUser = createAsyncThunk<
  Omit<UserState, "isLoading">,
  { email: string; password: string }
>("user/fetchSignUpUser", async ({ email, password }) => {
  // const auth = getAuth();

  // try {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return {
    email: user.email,
    creationTime: user.metadata.creationTime ?? null,
  };
  // } catch (error) {}
});

const initialState: UserState = {
  email: null,
  creationTime: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      state.creationTime = payload.creationTime;
      state.isLoading = false;
    });
    builder.addCase(fetchSignUpUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
