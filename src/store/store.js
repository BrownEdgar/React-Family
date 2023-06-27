import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/postsSlice";
import userReducer from "./features/usersSlice";


const myFirstMiddleWare = (store) => (next) => (action) => {
  console.log('myFirstMiddleWare...')
  if (action.type === 'post/deletePostById') {

    if (action?.payload?.secret === import.meta.env.VITE_PERMITION_SECRET_WORD) {
      next(action);
    } else {
      alert("you dont have permission")
    }
  } else {
    next(action);
  }

}
const checkPostId = (store) => (next) => (action) => {
  console.log("checkPostId...")
  if (action.type === 'post/addPost') {
    const state = store.getState()
    const isExist = state.posts.some(post => post.id === action.payload.id)
    console.log("isExist:", isExist)
    if (!isExist) {
      action.payload.date = new Date()
      next(action);
    } else {
      alert("post with this ID is alredy exsist in DB")
    }
  } else {
    next(action);
  }

}


export const store = configureStore({
  reducer: {
    posts: postReducer, 
    users: userReducer,
  },
  middleware: [myFirstMiddleWare, checkPostId]
})