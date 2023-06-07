import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

export default function ErrorPage() {
	const navigate = useNavigate()
	const hoHome = () => {
		// navigate('/')
		navigate({pathname: ROUTES.HOME})
	}
	return (
		<div style={{textAlign: "center"}}>
			<h1>404 | Page not found</h1>
			<button onClick={hoHome}>go home</button>
			<Link to={ROUTES.HOME}> go home </Link>
		</div>
	)
}