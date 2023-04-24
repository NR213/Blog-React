import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "./userContext";

export default function Header() {
    const {setUserInfo, userInfo} = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        fetch('http://localhost:4000/profile',{
        credentials: 'include',
        }).then(response =>{
            response.json().then(userInfo =>{
                setUserInfo(userInfo);
            });
        });
    }, []);
    
    async function logout(){
        const response = await fetch('http://localhost:4000/logout',{
            credentials: 'include',
            method: 'POST',
            
    });

    setUserInfo(null);

    }



    const username = userInfo?.username

    return (
        <header>
        <div className ="header">
            <Link to="" className = "blog">Blog</Link>
            <nav>
                {username && (
                    <>
                    <Link to="/create">Create a Blog!!</Link>
                    <a onClick={logout}>Logout</a>
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