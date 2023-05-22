import React from 'react'
import PropTypes from 'prop-types'
import './Component.scss'

export default function Component(props) {
  return (
    <>
        <div>
            <button onClick={() => props.sort('green')}>Online</button>
            <button onClick={() => props.sort('red')}>Ofline</button>
            <button onClick={() => props.sort('default')}>Refresh</button>
        </div>

        <div className='flex'>
            {
                props.data.map( elem => {
                    return (
                        <div key={elem.id} className='flex__item' onClick={() => props.toggle(elem.id)}>
                            <span className='flex__close' onClick={(element) => {
                                element.stopPropagation(),
                                props.closeItem(elem.id)
                            }}>&#10006;</span>
                            <h2>{elem.title}</h2>
                            <span className={`flex__status ${elem.completed ? 'flex__status-success': 'flex__status-failure'}`}></span>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
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
