import React from 'react';
import { useHistory } from "react-router-dom";

import "./landing.css";

const Login = (props) =>{
    return(
        <div className="landing-container">
            <div className="login-card">
                <div className="title">
                    Login
                </div>
                <div className="form">
                    <input placeholder="Username" type="text" />
                    <input placeholder="Password" type="password" />
                    <button >Login</button>
                </div>
            </div>
            <div className="OR text-shadow">
                OR
            </div>
            <div className="btn" onClick={props.loadSignup}>
                SIgn Up
            </div>
        </div>
    )
}

const SignUp = (props) =>{
    return(
        <div className="landing-container">
            <div className="login-card">
                <div className="title">
                    SignUp
                </div>
                <div className="form">
                    <input placeholder="Email" type="text" />
                    <input placeholder="Username" type="text" />
                    <input placeholder="Password" type="password" />
                    <button >SignUp</button>
                </div>
            </div>
            <div className="OR text-shadow">
                OR
            </div>
            <div className="btn"  onClick={props.loadLogin}>
                Login
            </div>
        </div>
    )
}

const Landing = (props) =>{
   
    function loadLogin(){
        compState({
            state:<Login history={props.history}  loadSignup={loadSignup} />
        })
    }
    
    function loadSignup(){
        compState({
            state:<SignUp history={props.history}  loadLogin={loadLogin} />
        })
    }

    let [comp,compState] = React.useState({
        state:<Login history={props.history}  loadSignup={loadSignup} />
    })
    
    return(
        comp.state
    )
}

export default Landing;