export const initialState = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/16255120/pexels-photo-16255120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  
      },
      {
        id: 3,
        image: 'https://images.pexels.com/photos/11942622/pexels-photo-11942622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  
      },
      {
        id: 4,
        image: 'https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  
      },
    
  ]
  
  export default (state = initialState, { type }) => {
    switch (type) {
      default:
        return state
    }
  }
  