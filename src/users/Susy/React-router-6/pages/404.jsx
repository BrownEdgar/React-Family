import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import ROUTES from '../routes/ROUTES'

export default function ErrorPage() {
	const navigate = useNavigate()
	const hoHome = () => {
		navigate({ pathname: ROUTES.ABOUT })
	}
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>404 | Page not found</h1>
			<Link to={ROUTES.HOME}> go home</Link>
		</div>
	)
}
