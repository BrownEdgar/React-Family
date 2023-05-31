import { useState } from 'react'


import "./App.scss"

export default function App() {
    const [users,setUsers] = useState([])

    const handleClick = () => {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        
        const newUser = {
            email: email,
            password: password
        }
        
        setUsers([...users, newUser])
        
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
    }
    return (
        <div>
            <div className="container">
                <h1>Вход</h1>
                <form>
                    <input type="email" name="" id="email" placeholder="Имя пользователя или Email" />
                    <input type="password" name="" id="password" placeholder="Пароль" />
                </form>
                <h3>Забыли пароль?</h3>
                <div className="container__buttons">
                    <button className='blue'><span>Войти</span></button>
                    <button onClick={handleClick} className='grey'><span>Регистрация</span></button>
                </div>
            </div>
            <div className='users'>
                <h4>Users:</h4>
                {users.map((user, index) => (
                    <div key={index}>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}