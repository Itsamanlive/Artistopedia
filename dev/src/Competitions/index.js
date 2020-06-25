import React from 'react';
import "./dashboard.css";

const Dashboard = (props) =>{

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
                    
                    <div className="card"onClick={()=>gotoCopetition("1v1")} >
                        <div className="title">
                            🎸 1 v 1
                        </div>
                        <div className="type">
                            🎵 Competition Type
                        </div>
                        <div className="duration">
                            ⏲ Competition duration
                        </div>
                    </div>

                    <div className="card"onClick={()=>gotoCopetition("5v5")} >
                        <div className="title">
                            🎸 5 v 5
                        </div>
                        <div className="type">
                            🎵 Competition Type
                        </div>
                        <div className="duration">
                            ⏲ Competition duration
                        </div>
                    </div>

                    <div className="card"onClick={()=>gotoCopetition("10v10")} >
                        <div className="title">
                            🎸 10 v 10
                        </div>
                        <div className="type">
                            🎵 Competition Type
                        </div>
                        <div className="duration">
                            ⏲ Competition duration
                        </div>
                    </div>

                    <div className="card"onClick={()=>gotoCopetition("20v20")} >
                        <div className="title">
                            🎸 20 v 20
                        </div>
                        <div className="type">
                            🎵 Competition Type
                        </div>
                        <div className="duration">
                            ⏲ Competition duration
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;
