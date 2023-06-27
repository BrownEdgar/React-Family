import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/postsSlice";
import userReducer from "./features/usersSlice";

const checkPostId = (store) => (next) => (action) => {
  if(action.type === 'posts/addPost') {
    const state = store.getState()
    const isExist = state.posts.some(post => post.id === action.payload.id)
    if(!isExist) {
      next(action)
    }else {
      alert('post with this ID is already exist in DB')
    }
  }else {
    next(action)
  }
}

const checkUserId = (store) => (next) => (action) => {
  if(action.type === 'users/addUser') {
    const state = store.getState()
    const isExist = state.users.users.some(user => user.id === action.payload.id)
    if(!isExist) {
      next(action)
    }else {
      alert('user with this ID is already exist in DB')
    }
  }else {
    next(action)
  }
}

const checkUserEmail = (store) => (next) => (action) => {
  if(action.type === 'users/addUser') {
    const state = store.getState()
    const isExist = state.users.users.some(user => user.email === action.payload.email)
    if(!isExist) {
      next(action)
    } else {
      alert('user with this EMAIL is already exist in DB')
    }
  } else {
    next(action)
  }
}

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
  middleware: [checkPostId, checkUserId, checkUserEmail]
});