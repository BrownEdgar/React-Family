import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../components/Navbar.scss'
import ROUTES from "../routes/ROUTES.JS";


export default function Navbar() {
    return (
        <header>
            <nav>
            <ul>
                <li>
                    <NavLink to={ROUTES.HOME}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.ABOUT}>About</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.ALBUM}>Album</NavLink>
                </li>
                
            </ul>
            </nav>
        </header>
    )
}