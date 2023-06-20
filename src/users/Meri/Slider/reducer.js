export const initialState = [
    {
        id:1,
        image: '/src/users/Meri/images/first.jpg'
    },
    {
        id:2,
        image: '/src/users/Meri/images/second.jpg'
    },
    {
        id:3,
        image: '/src/users/Meri/images/third.jpg'
    },
    {
        id:4,
        image: '/src/users/Meri/images/four.jpg'
    },
    {
        id:5,
        image: '/src/users/Meri/images/five.jpg'
    },
    {
        id:6,
        image: '/src/users/Meri/images/six.jpg'
    }
]

export default (state = initialState, { type }) => {
    switch (type) {
        default:
            return state
    }
}
