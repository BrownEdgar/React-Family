import React from "react";
import './Navbar.scss'
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";

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
            <NavLink to={ROUTES.ROBOTES}>ROBOTES</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ALBUMS}>ALBUMS</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CREATE}>Create</NavLink>
          </li>
        </ul>
      </nav>
    </header>
	)
}