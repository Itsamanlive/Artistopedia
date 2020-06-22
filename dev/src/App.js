import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

import Login from './Login';
import Dashboard from "./Dashboard";
import Competition from "./Competition";

const App = (props) => {
   
  return (
    <div className="main">
      <div className="title-main">
                Artist o Pedia
        </div>
        <Router>
          <Route path = "/" exact component = { Login } />
          <Route path = "/dashboard" exact component = { Dashboard } />
          <Route path = "/competition" exact component = { Competition } />
        </Router>
    </div>   
  );
}

export default App;




















