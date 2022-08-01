import { createSlice } from "@reduxjs/toolkit";
const user = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    id: "",
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
export const { login, logout } = user.actions;

export default user.reducer;
