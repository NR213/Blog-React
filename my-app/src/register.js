import React, { useEffect, useState } from "react";
export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    async function register(ev){
        ev.preventDefault();
        await fetch('http://localhost:4000/register',{
            method: 'POST',
            body: JSON.stringify({username, password, email}),
            headers: {'content-type':'application/json'},
        })
    }
    return(
        <div className="register">
        <form className="register" onSubmit = {register}>
        <h1>REGISTER</h1>
        <input type="text" placeholder="Username" value = {username} onChange = {ev => setUsername(ev.target.value)}/>
        <input type="password" placeholder="Password"  value = {password} onChange = {ev => setPassword(ev.target.value)}/>
        <input type="email" placeholder="Email" value = {email} onChange = {ev => setEmail(ev.target.value)}/>
        <button>Register</button>
        </form>
    </div>
    );
}