import React, { useState } from "react";
import './App.scss';

export default function App() {

    const [register, setRegister] = useState([])

    const handleClick = () => {
        const emailInp = document.getElementById('email');
        const passwordInp = document.getElementById('password');
        const email = emailInp.value;
        const password = passwordInp.value;

        const newRegister= {
            email: email,
            password: password,
        };

        setRegister([...register, newRegister])

        emailInp.value = '';
        passwordInp.value = '';
        console.log(newRegister)
    }


    return (
        <div className="parent">
            <div className="parent__container">
                <h1>Вход</h1>
                <form>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Имя пользователя или Email" />
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Пароль" />
                </form>
                <h3>Забыли пароль?</h3>
                <div className="parent__container__buttons">
                    <button onClick={handleClick}><span>Войти</span></button>
                    <button><span>Регистрация</span></button>
                </div>
            </div>
        </div>
    )
}