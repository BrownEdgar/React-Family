import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      const userId = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);
    },
  },
});

export default usersSlice.reducer;
export const { addUser, deleteUser } = usersSlice.actions;