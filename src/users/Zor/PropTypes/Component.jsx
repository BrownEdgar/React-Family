import React from 'react'
import PropTypes from 'prop-types'
import './Component.scss'

export default function Component(props) {
  return (
    <div className='flex'>
        {
            props.data.map( elem => {
                return (
                    <div key={elem.id} className='flex__item' onClick={() => props.toggle(elem.id)}>
                        <h2>{elem.title}</h2>
                        <span className={`flex__status ${elem.completed ? 'flex__status-success': 'flex__status-failure'}`}></span>
                    </div>
                )
            })
        }
    </div>
  )
}

Component.defaultProps = {
    name: 'unknown',
}

Component.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
            userId: PropTypes.number,
            id: PropTypes.number,
            title: PropTypes.string,
            completed: PropTypes.bool
        })
    ),
    toggle: PropTypes.func.isRequired
}
