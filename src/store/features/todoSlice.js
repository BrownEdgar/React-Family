import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAsyncTodos = createAsyncThunk(
	'todos/getAsyncTodos',
	async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
		return response.data
	})

const todoSlice = createSlice({
	name: "todos",
	initialState: {
		data: [],
		status: 'idle'
	},
	reducers: {
		addTodos: (state, action) => {
			return action.payload
		}
	},
	extraReducers: (builder) => {
		builder
		.addCase(getAsyncTodos.pending,(state) => {
			state.status = 'pending'
		})
		.addCase(getAsyncTodos.fulfilled,(state, action) => {
			return {
				data: action.payload,
				status: 'success'
			}
		})
		.addCase(getAsyncTodos.rejected,(state, ) => {
			state.status = 'rejected'
		})
	}

})

export default todoSlice.reducer;
export const { addTodos } = todoSlice.actions