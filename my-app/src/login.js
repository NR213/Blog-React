import React, { useEffect, useState } from "react";
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function login(ev){
        ev.preventDefault();
        await fetch('http://localhost:4000/login',{
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'content-type':'application/json'},
        })
    }
    return(
        <div className="login">
            <form className="login" onSubmit = {login}>
            <h1>LOGIN</h1>
            <input type="text" placeholder="Username" value = {username} onChange = {ev => setUsername(ev.target.value)}/>
            <input type="password" placeholder="Password" value = {password} onChange = {ev => setPassword(ev.target.value)}/>
            <button>Login</button>
            </form>
        </div>
    );
}

