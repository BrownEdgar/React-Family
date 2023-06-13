import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../routes/ROUTES'

import './Navbar.scss'

export default function Navbar() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to={ROUTES.HOME}>HOME</NavLink>
					</li>
					<li>
						<NavLink to={ROUTES.POSTS}>POSTS</NavLink>
					</li>
					<li>
						<NavLink to={ROUTES.BLOG}>BLOG</NavLink>
					</li>
					<li>
						<NavLink to={ROUTES.NEWPOST}>ADDNEWPOST</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
