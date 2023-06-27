import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos: todoSlice;
  }
})
export default store;