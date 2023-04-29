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
                    <Link to="/create"><button className="navbut">
  <span class="button_top"> Create a post!!
  </span>
</button></Link>
                    <a  href = "/login" onClick={logout}><button className="navbut">
  <span class="button_top"> Logout
  </span>
</button></a>
                    </>
                )}
                {!username && (
                    <>
                   <Link to="/login">
                   <button className="navbut">
  <span class="button_top"> Login
  </span>
</button>
                   </Link>
                   <Link to="/register"><button className="navbut">
  <span class="button_top"> Register
  </span>
</button></Link>     
                   </>
                )}
            
            </nav>
        </div>
        </header>
    );
}