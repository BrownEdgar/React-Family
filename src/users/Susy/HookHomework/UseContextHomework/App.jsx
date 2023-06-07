import { useState } from "react";
import A from "./A";
import { MyContext } from "./Context";

export default function App() {
	const [data, setData] = useState("default")
	const createFunc = () => {
		setData("info")
	}
	const deleteFunc = () => {
		setData("")
	}
	return (
		<div>
			<h1>App Component</h1>
			<MyContext.Provider value={{
				createFunc,
				deleteFunc,
				data
			}}>
				<A />
			</MyContext.Provider>

		</div>
	)
}