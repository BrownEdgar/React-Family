import React from 'react'
import './Component.scss'

export default function ComponentBtn(props) {
  return (
    <div>
        <button onClick={() => props.sort(true)}>Online</button>
        <button onClick={() => props.sort(false)}>Ofline</button>
        <button onClick={() => props.refresh()}>Refresh</button>
    </div>
  )
}
