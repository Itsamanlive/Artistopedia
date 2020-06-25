import React from 'react';
import "./dashboard.css";

const Dashboard = (props) =>{

    function gotoCopetition(id){
        props.history.push({
            pathname: '/competition',
            state: {
              id: id,
            }
        })
    }  

    let data = [...Array(16).keys()];

    return(
        <div className="dash-container">
            <div className="dashboard">
                <div className="container">
                    {
                        data.map((i,d)=>{
                            return(
                                <div className="card" key={i} onClick={()=>{gotoCopetition(i)}}>
                                    <div className="title">
                                        🎸 Competition Name
                                    </div>
                                    <div className="type">
                                        🎵 Competition Type
                                    </div>
                                    <div className="duration">
                                        ⏲ Competition duration
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
