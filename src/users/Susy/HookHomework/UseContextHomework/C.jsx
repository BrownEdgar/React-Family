import React, {useContext}from "react";
import { MyContext } from "./Context";


export default function C() {
	const value = useContext(MyContext);
	console.log(value)
	return (
		<div>
			<h2>Component C {value.data}</h2>

		</div>
	)
}