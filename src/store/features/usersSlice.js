import { createSlice } from "@reduxjs/toolkit";

const initialUserValue = [];

const usersSlice = createSlice({
  name: "users",
  initialState: initialUserValue,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default usersSlice.reducer;
export const { addUser } = usersSlice.actions;