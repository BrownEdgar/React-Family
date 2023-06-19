export const initialState = [
    {
      id: 1,
      image:'./public/Rio1.jpg'
    },
    {
      id: 2,
      image:'./public/Rio2.jpg'
    },
    {
      id: 3,
      image:'./public/Rio3.jpg'
    },
    {
      id: 4,
      image:'./public/Rio4.jpg'
    },
]

export default (state = initialState, { type, payload }) => {
  switch (type) {
  default:
    return state
  }
}
