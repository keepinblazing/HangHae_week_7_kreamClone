import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    email: "",
    nickname: "",
  },
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
    },
    logout(state) {
      state.isLogin = false;
      state.id = null;
      state.nickname = null;
    },
  },
});
export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;