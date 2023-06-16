import React, { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import ROUTES from '../routes/ROUTES'

export default function PrivateRoute() {
	const [isLogin, setIsLogin] = useState(!!window.localStorage.getItem("isLogin"))

	return (
		<>
			{
				isLogin ? <Outlet /> : <Navigate to={ROUTES.HOME}/>
			}
		</>
	)
}
