import React, { useReducer } from 'react'
import Slider from 'react-slick';
import './App.scss'
import reducer, { initialState } from './reducer';
import Post from './Post';

export default function App() {
  const [state , dispatch] = useReducer(reducer,initialState)

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className='App'>Rio de Janeiro
      <div className="App-container">
        <Slider {...settings}>
          {
            state.map(post => <Post key = {post.id} post={post} />)
          }
        </Slider>
      </div>
    </div>
  )
}
