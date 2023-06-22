import Slider from "react-slick";
import './App.scss';
import { useReducer } from 'react';
import reducer, { initialState } from './reducer';
import Post from "./Post";


export default function App() {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
	};

	const [state, dispatch] = useReducer(reducer, initialState)


	return (
		<div className='App'>
			<div className='App-container'>
				<Slider {...settings}>
					{
						state.map(post => <Post key={post.id} post={post} />)
					}


				</Slider>

			</div>

		</div>
	)
}
