import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/countSlice";
import usersReducer from "./features/usersSlice";
import postReducer from "./features/postsSlice";


 export const store = configureStore({
	reducer:{
		count: countReducer,
		users: usersReducer,
		posts: postReducer

	}
})