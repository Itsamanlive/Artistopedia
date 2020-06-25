import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

import Landing from './Landing';
import Area from './Area';
import Competitions from "./Competitions";
import Competition from "./Competition";

const Notification = (props) =>{
  return(
      <div className="notification">
          {props.msg}
      </div>
  )
}

const App = (props) => {
  
  let [notif,notifState] = React.useState({
    comp:undefined
  })

  window.notify = function(msg){
    notifState({
      comp:<Notification msg={msg} />
    })
    setTimeout(function(){
      notifState({
        comp:undefined
      })
    },4000)
  }

  return (
    <div className="main">
      <div className="notification-container" id="notification">
        {notif.comp}
      </div>
      <div className="title-main">
          Artist o Pedia
      </div>
      <Router>
        <Route path = "/" exact component = { Landing } />
        <Route path = "/area" exact component = { Area } />
        <Route path = "/competitions" exact component = { Competitions } />
        <Route path = "/competition" exact component = { Competition } />
      </Router>
    </div>   
  );
}

export default App;




















