import React from 'react';
import axios from 'axios';

import "./landing.css";

const Login = (props) =>{
    let [cred,credState] = React.useState({
        email:undefined,
        password:undefined
    })

    return(
        <div className="landing-container">
            <div className="login-card">
                <div className="title">
                    Login
                </div>
                <div className="form">
                    <input placeholder="Email" type="text"onKeyUp={(e)=>{credState({...cred,email:e.target.value})}} />
                    <input placeholder="Password" type="password"onKeyUp={(e)=>{credState({...cred,password:e.target.value})}} />
                    <button onClick={()=>props.login(cred)} >Login</button>
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
    let [cred,credState] = React.useState({
        username:undefined,
        email:undefined,
        password:undefined
    })

    return(
        <div className="landing-container">
            <div className="login-card">
                <div className="title">
                    SignUp
                </div>
                <div className="form">
                    <input placeholder="Email" type="text" onKeyUp={(e)=>{credState({...cred,email:e.target.value})}} />
                    <input placeholder="Username" type="text" onKeyUp={(e)=>{credState({...cred,username:e.target.value})}} />
                    <input placeholder="Password" type="password"onKeyUp={(e)=>{credState({...cred,password:e.target.value})}} />
                    <button onClick={()=>props.signup(cred)} >SignUp</button>
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

    async function signup(data){
        await axios({
            url:"http://localhost:8080/user",
            method:"POST",
            data:data
        }).then(respose=>{
            window.notify(respose.data.message)
            setTimeout(function(){
                if(respose.data.status){
                    loadLogin()
                }
                else{
                    console.log("WTF")
                }
            },2500)
        })
    }

    async function login(data){
        console.log(data)
        await axios({
            url:"http://localhost:8080/user",
            method:"PUT",
            data:data,
        }).then(respose=>{
            window.notify(respose.data.message)
            if (respose.data.status){
                window.user = data.email
                props.history.push({
                    pathname:"/area",
                    state:{
                        _id:data.email
                    }
                })
            }
        })
    }

   
    function loadLogin(){
        compState({
            state:<Login history={props.history}  loadSignup={loadSignup} login={login} />
        })
    }
    
    function loadSignup(){
        compState({
            state:<SignUp history={props.history}  loadLogin={loadLogin} signup={signup} />
        })
    }


    let [comp,compState] = React.useState({
        state:<Login history={props.history}  loadSignup={loadSignup} login={login} />
    })
    

    return(
        comp.state
    )
}

export default Landing;