import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes/Routes'

export default function Navbar() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to={ROUTES.HOME}>HOME</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.ABOUT}>ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.BLOG}>BLOG</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.CONTACT}>CONTACT</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
