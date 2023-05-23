import {useState, useEffect} from "react"
export default function App() {
    const [user, setUser] = useState({});
        useEffect(() =>{
            fetch(`https://dummyjson.com/users/${Math.trunc(Math.random() * 101)}`)
            .then(res => res.json())
            .then(data => setUser(data))
        },[])
    return (
        <div>
            <img src={user.image} alt="" />
            <h2>FIRST NAME: {user.firstName}</h2>
            <h2>LAST NAME: {user.lastName}</h2>
            <h2>EMAIL: {user.email}</h2>
            <h2>IP: {user.ip}</h2>
         </div>
    )
}