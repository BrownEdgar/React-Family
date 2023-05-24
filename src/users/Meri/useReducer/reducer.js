export const users = [
    {
        id: 1,
        firstname: 'Jhon',
        revenue: 560_000,
        brd: new Date('05/24/2023')
    },
    {
        id: 2,
        firstname: 'Rock',
        revenue: 860_000,
        brd: new Date('8/18/1972')
    },
    {
        id: 3,
        firstname: 'Silva',
        revenue: 320_500,
        brd: new Date('2/3/1998')
    },
    {
        id: 4,
        firstname: 'Email',
        revenue: 780_600,
        brd: new Date('11/14/1994')
    }
]

export default function reducer(state = users,action) {
    switch (action.type) {
        case 'TODAY_FILTER':
            const today = new Date()
            const userName = state.some(user => {
                return (
                    user.brd.toDateString() === action.payload.toDateString()
                )
            })

            // const today = new Date()
            // const userName = state.some(user => {
            //     return (
            //         user.brd.getDate() === today.getDate() &&
            //         user.brd.getMonth() === today.getMonth() &&
            //         user.brd.getFullYear() === today.getFullYear()
            //     )
            // })

            // const userName = state.filter(
            //     user => user.brd.toDateString() === action.payload.toDateString()
            // )
            return userName;
        case 'SORT_AGE':
            const sortedUsers = state.toSorted((a,b)  => a.brd - b.brd)
            return sortedUsers;
        case 'INCREASE_REVENUE':
            const lowest = state.reduce((min,max) => {
                if(min.revenue < max.revenue) {
                    return min
                }
                return max
            });
            const newUsers = state.map(user => {
                if(user.id === lowest.id) {
                    return (
                        {...user, revenue: user.revenue + 80000}
                    )
                }
                return user
            })
            return newUsers
        case 'CHANGE_YEAR':
            const updateusers = state.map(user => {
                if(user.id === 3) {
                    const newBrd = new Date(user.brd);
                    newBrd.setFullYear(newBrd.getFullYear() + 2)
                    return (
                        {...user, brd: newBrd}
                    )
                }
                return user
            })
            return updateusers 
        case 'AUGUST':
            const usersFilter = state.filter(user => user.brd.getMonth() === 7)
            return usersFilter   
        default:
            return state
    }

}