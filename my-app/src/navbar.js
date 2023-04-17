import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [username, setUsername] = useState('');
    useEffect(() => {
        fetch('http://localhost:4000/profile',{
        credentials: 'include',
        }).then(response =>{
            response.json().then(userInfo =>{
                setUsername(userInfo.username);
            });
        });
    }, []);
    return (
        <header>
        <div className ="header">
            <Link to="" className = "blog">Blog</Link>
            <nav>
                {username && (
                    <>
                    <Link to="/create">Create a Blog!!</Link>
                    <Link to="/logout">Logout</Link>
                    </>
                )}
                {!username && (
                    <>
                   <Link to="/login">Login</Link>
                   <Link to="/register">Register</Link>     
                   </>
                )}
            
            </nav>
        </div>
        </header>
    );
}