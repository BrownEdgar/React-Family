import PropTypes from 'prop-types'

import './Component.scss'

export default function Component(props) {
	return (

		<div>
			<button onClick={() => props.sortedData("green")}>One</button>
			<button onClick={() => props.sortedData("red")}>Two</button>
			<button onClick={() => props.sortedData("default")}>Three</button>
			<div className='flex'>


				{
					props.data.map(elem => {
						return (
							<div key={elem.id} className='flex__item' onClick={() => props.toggle(elem.id)}>
								<span className='flex__item__del' onClick={(e) => {
									e.stopPropagation()
									props.deleteFunc(elem.id)
								}}>&#10006;</span>
								<h2>{elem.title}</h2>
								<span className={`flex__status ${elem.completed ? 'flex__status-success' : 'flex__status-failure'}`}></span>
							</div>
						)
					})
				}

			</div></div>

	)
}



Component.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			userId: PropTypes.number,
			id: PropTypes.number,
			title: PropTypes.string,
			completed: PropTypes.bool,
		})
	),
	toggle: PropTypes.func.isRequired,
	deleteFunc: PropTypes.func.isRequired,

	sortedData: PropTypes.func.isRequired,
};
