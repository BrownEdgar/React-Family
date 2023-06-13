import React, { useEffect } from "react";
import './Login.scss'
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
export default function Login() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const {email, password} = e.target
        if(email.value === import.meta.env.VITE_ADMIN_EMAIL &&
            password.value === import.meta.env.VITE_ADMIN_PASSWORD) {
                navigate(ROUTES.HOME)
                localStorage.setItem('isLogin', true)
            }else {
                alert("check your inputs value")
            }
    }
    useEffect(() => {
        const login = localStorage.getItem('isLogin');
        if(login !== null) {
            localStorage.removeItem('isLogin')
        }
    },[])
    return (
        <div className="Login">
            <form className="Login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="enter email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="enter password" id="password"/>
                </div>
                <div className="form-group form-group_submit">
                    <input type="submit" value="login" />
                </div>
            </form>
        </div>
    )
}