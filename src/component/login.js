import React from "react";
import { useRef, useState, useEffect } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import './css/loginpage.css';
import jamz from './images/5jamscheck.png';


  
const login = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const userRef = useRef();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const errRef = useRef();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user,setUser] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pwd,setPwd] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errMsg,setErrMsg] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [success,setSuccess] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        userRef.current.focus();
    }, [])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(user,pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    


  return (
    <>
    {success ? (
      <html>
         <head>
            <title>Welcome</title>
            <meta http-equiv = "refresh" content = "2; url = /mainpage" />
         </head>
         <body>
            <div class="text-center mt-4 name">
            <p>This page will be redirected shortly.</p>
        </div>
         </body>
      </html>
    ) : (
       
<div>

<div class="wrapper">
        <div class="logo">
            <img src={jamz} alt=""></img>
        </div>
        <div class="text-center mt-4 name">
            <p>5Jamz</p>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        </div>
        <form class="p-3 mt-3" onSubmit={handleSubmit}>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" id="userName" placeholder="Username" ref={userRef} autoComplete="off" onChange={(e)=> setUser(e.target.value)} value={user} required></input>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" id="pass" placeholder="Password" onChange={(e)=> setPwd(e.target.value)} value={pwd} required></input>
            </div>
            <button class="btn mt-3">Login</button>
        </form>
        
    </div>





    </div>
    )}
    </>

  );
};

export default login;