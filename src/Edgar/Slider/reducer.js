export const initialState = [
	{
		id: 1,
		title: "Post one",
		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dicta neque pariatur natus aliquam non vero.",
		read: '4m',
		comment: 32,
		views:5123,
		date: new Date(2023, 5, 13),
		image:'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'		
	},
	{
		id: 2,
		title: "Post two",
		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dicta neque pariatur natus aliquam non vero.",
		read: '4m',
		comment: 32,
		views:5123,
		date: new Date(2023, 5, 13),
		image:'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'		
	},
	{
		id: 3,
		title: "Post three",
		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dicta neque pariatur natus aliquam non vero.",
		read: '4m',
		comment: 32,
		views:5123,
		date: new Date(2023, 5, 13),
		image:'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'		
	},
	{
		id: 4,
		title: "Post four",
		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dicta neque pariatur natus aliquam non vero.",
		read: '4m',
		comment: 32,
		views:5123,
		date: new Date(2023, 5, 13),
		image:'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'		
	},
]

export default (state = initialState, { type, payload }) => {
	switch (type) {


	default:
		return state
	}
}
