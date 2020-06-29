import React from 'react';
import "./dashboard.css";

const Dashboard = (props) =>{

    let type = props.location.state;

    function gotoCopetition(name){
        props.history.push({
            pathname: '/competition',
            state: {
              name:name
            }
        })
    }  

    let data = [...Array(16).keys()];

    return(
        <div className="dash-container">
            <div className="dashboard">
                <div className="container">
                    <div className="card" onClick={()=>gotoCopetition(0)} >
                        <div className="title">
                            1 v 1
                        </div>
                    </div>

                    <div className="card" onClick={()=>gotoCopetition(1)} >
                        <div className="title">
                            5 Men Arena
                        </div>
                    </div>

                    <div className="card" onClick={()=>gotoCopetition(2)} >
                        <div className="title">
                            10 Men Arena
                        </div>
                    </div>

                    <div className="card" onClick={()=>gotoCopetition(3)} >
                        <div className="title">
                            20 Men Arena
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
