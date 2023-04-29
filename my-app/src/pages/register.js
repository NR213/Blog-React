import React, { useEffect, useState } from "react";
export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    async function register(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register',{
            method: 'POST',
            body: JSON.stringify({username, password, email}),
            headers: {'content-type':'application/json'},
        })
        if (response.status === 200){
            alert('Registration succesful');
        }else{
            alert('Registration failed');
        }
    }
    return(
        <form class="form" onSubmit = {register}>
<p class="form-title">Register</p>
 <div class="input-container">
 <input type="text" placeholder="Username" name="text" class="input" value = {username} onChange = {ev => setUsername(ev.target.value)}/>
   <span>
     <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
     </svg>
   </span>
</div>
<div class="input-container">
<input type="text" placeholder="Password" name="text" class="input" value = {password} onChange = {ev => setPassword(ev.target.value)}/>

   <span>
     <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
       <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
     </svg>
   </span>
 </div>

 <div class="input-container">
<input type="text" placeholder="Email" name="text" class="input" value = {email} onChange = {ev => setEmail(ev.target.value)}/>

   <span>
     <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
       <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
     </svg>
   </span>
 </div>
 <div className="regbutton">
 <button class="submit" type="submit">
 register
    <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
</button>
</div>
</form>
    );
}

