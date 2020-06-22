import React from 'react';
import { useHistory } from "react-router-dom";

import "./login.css";

const Login = (props) =>{
    const history = useHistory();
    function handleClick() {
        history.push("/dashboard");
    }
    return(
        <div className="login-container">
            <div className="login-card">
                <div className="title">
                    Login
                </div>
                <div className="form">
                    <input placeholder="Username" type="text" />
                    <input placeholder="Password" type="password" />
                    <button onClick={handleClick}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;