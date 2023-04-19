import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  creationTime: string | null;
}

const initialState: UserState = {
  email: null,
  creationTime: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
