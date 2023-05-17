import React from 'react'
import PropTypes from 'prop-types'

import './Component.scss'

export default function Component(props) {
	return (
		
		<div>
			<button onClick={() => props.oneFunc()}>One</button>
			<button onClick={() => props.twoFunc()}>Two</button>
			<button onClick={() => props.threeFunc()}>Three</button>
			<div className='flex'>
            
            
		{
			props.data.map(elem=>{
				return (
					<div key={elem.id} className='flex__item' onClick={()=>props.toggle(elem.id)}>
						<span className='flex__item__del' onClick={() => props.deleteFunc(elem.id)}>&#10006;</span>
						<h2>{elem.title}</h2>
						<span className={`flex__status ${elem.completed ? 'flex__status-success' : 'flex__status-failure' }`}></span>
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
	oneFunc: PropTypes.func.isRequired,
	twoFunc: PropTypes.func.isRequired,
	threeFunc: PropTypes.func.isRequired,
  };
  