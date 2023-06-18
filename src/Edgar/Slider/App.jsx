import { useReducer } from 'react'
import Slider from "react-slick";
import reducer, { initialState } from './reducer';
import Post from './Post';

import './App.scss'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <div className='App'>
      <div className="App-container">
        <Slider {...settings}>
          {
            state.map(post => <Post key={post.id} post={post} />)
          }
        </Slider>
      </div>
    </div>
  )
}
