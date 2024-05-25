import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";

export default function Header()
{
  const {setUserInfo, user_info} = useContext(UserContext)
  useEffect( () => 
  {
    fetch('http://localhost:4000/profile', 
    {
      credentials: 'include',
    }).then( res => 
      {
        res.json().then(user_info => 
          {
            setUserInfo(user_info)
          })  
      })
  }, [])

  function SignOut()
  {
   fetch("http://localhost:4000/signout",
    {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null) 
  }

  const username = user_info?.username;
    return (
        <header>
        <Link to="/" className="logo">Just Blogging</Link>
        <nav> 
          {username && (
            <>
            {/* <span>Hello, {username}</span> */}
            <Link to="/create">Create New Blog</Link>
            <Link  onClick={SignOut} to="/Signout">Sign out</Link>
            </>
          )}
          {!username && (
            <>
            <Link to="/signin"> Sign In </Link>
            <Link to="/signup"> Sign Up </Link>
            </>
          )}
          
          
        </nav>
      </header>
    );
}