import { createSlice } from "@reduxjs/toolkit";

const initialPostValue = [{
	"userId": 1,
	"id": 1,
	"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
	"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
	"userId": 1,
	"id": 2,
	"title": "qui est esse",
	"body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
	"userId": 1,
	"id": 3,
	"title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
	"body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{
	"userId": 1,
	"id": 4,
	"title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
	"body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{
	"userId": 1,
	"id": 5,
	"title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
	"body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
}]

const postSlice = createSlice({
	name: 'post',
	initialState: initialPostValue,
	reducers: {
		addPost(state, action) {
			state.push(action.payload)
		},
		deletePostById(state, action) {
			const result = state.filter(post => post.id !== action.payload.id);
			return result
		},
	}
})

export default postSlice.reducer;
export const { addPost, deletePostById } = postSlice.actions
