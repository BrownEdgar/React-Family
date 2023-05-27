// import React, { useState, } from "react";
// import A from "./A";
// import { MyContext } from "./Context";


// export default function App() {
//     const [data, setData] = useState('');
//     const createFunc = () => {
//         setData('');
//  }

// return (
//     <div>
//       <h1>App Component</h1>
//       <MyContext.Provider value={data}>
//         <A />
//       </MyContext.Provider>
//       <button onClick={createFunc}>Create</button>
//     </div>
//   );
// }




import SimpleHook from "./SimpeHook";
const todos = [
	{
		"userId": 1,
		"id": 1,
		"title": "delectus aut autem",
		"completed": false
	},
	{
		"userId": 1,
		"id": 2,
		"title": "quis ut nam facilis et officia qui",
		"completed": false
	}
]
export default function App() {


	const {
		data,
		addId,
		allDone,
	} = SimpleHook(todos)
	return (
		<div>
			<pre>{JSON.stringify(data, null, 1)}</pre>
			<button onClick={allDone}>All done</button>
			<button onClick={addId}>Add id</button>
		</div>
	)
} 