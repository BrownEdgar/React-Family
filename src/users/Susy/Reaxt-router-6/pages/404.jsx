import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import ROUTES from '../routes/Routes'

export default function ErrorPage() {
        const navigate = useNavigate()
    const goHome = () => {
      navigate({pathname: ROUTES.HOME})
    }
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>404 | Page not found</h1>
        <button style={{textAlign: 'center'}} onClick={goHome}>go Home</button>
        <Link to={ROUTES.HOME}>go Home</Link>
    </div>
  )
}
