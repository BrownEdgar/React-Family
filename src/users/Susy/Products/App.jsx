// import {useState,useEffect} from 'react'

// import "./App.scss"

// export default function App() {
// 	const [user, setUser] = useState({});
// 	useEffect(() => {
// 		fetch('https://dummyjson.com/products/9')
// 		.then(res => res.json())
// 		.then(data => setUser(data))
// 	}, [])
	
// 	return (
//         user.map(users=>{
//             return (
//                 <div>
// 			        <div className='User'>     
// 						<img src={user?.images[0]} alt="" />
// 				    	<div key={user.id} className="User__info">
// 					        <h2><span>title</span> {user.title}</h2>
// 					        <h2><span>description</span> {user.description}</h2>
// 					        <h2><span>price</span> {user.price}</h2>
// 					        <h2><span>stock</span> {user.stock}</h2>
// 			            </div>
// 			        </div>
// 		        </div>
//             )

//         })
// 	)
// }
// import {useState,useEffect} from 'react'
// import "./App.scss"
// export default function App() {
//     const [user, setUser] = useState({});
//     console.log(user)
//     useEffect(() => {
//         fetch('https://dummyjson.com/products')
//         .then(res => res.json())
//         .then(data => setUser(data))
//     }, [])
//     return (
// 		<div>
// 			{user.map(user=>(
//             	<div className='User'>
//                 	<img src={user?.images[user.id]} alt="" />
//                 	<div className="User__info">
//                     	<h2><span>title</span> {user.title}</h2>
//                     	<h2><span>description</span> {user.description.slice(1,10)}</h2>
//                     	<h2><span>price</span> {user.price}</h2>
//                     	<h2><span>stock</span> {user.stock}</h2>
//                 	</div>
//             	</div>
// 			))}
//         </div>  
//     )
// }
// import { useState, useEffect } from 'react';
// import "./App.scss";

// export default function App() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetch('https://dummyjson.com/products')
//             .then(res => res.json())
//             .then(data => setUsers(data));
//     }, []);

//     return (
//     	<div>
//   			{users.map(elem => (
//     			<div className='User' key={elem.id}>
//       				<img src={elem.images[elem.id]} alt="" />
//       				<div className="User__info">
//         				<h2><span>title</span> {elem.title}</h2>
//         				<h2><span>description</span> {elem.description.slice(1, 10)}</h2>
//         				<h2><span>price</span> {elem.price}</h2>
//         				<h2><span>stock</span> {elem.stock}</h2>
//       				</div>
//     			</div>
//   			))}
// 		</div>
//     );
// }
import { useState, useEffect } from 'react';
import "./App.scss";

export default function App() {
    const [users, setUsers] = useState([]); // Initialize users as an empty array

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            {users.length > 0 ? (
                users.map(user => (
                    <div className='User' key={user.id}>
                        <img src={user.images[0]} alt="" />
                        <div className="User__info">
                            <h2><span>title</span> {user.title}</h2>
                            <h2><span>description</span> {user.description.slice(1, 10)}</h2>
                            <h2><span>price</span> {user.price}</h2>
                            <h2><span>stock</span> {user.stock}</h2>
                        </div>
                    </div>
                ))
            ) : (
                <p>.</p>
            )}
        </div>
    );
}
