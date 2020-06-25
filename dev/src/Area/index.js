import React from 'react';
import "./area.css";

const Dashboard = (props) =>{

    function gotoCopetition(type){
        props.history.push({
            pathname: '/competitions',
            state: {
              type: type,
            }
        })
    }  

    let data = [...Array(16).keys()];

    return(
        <div className="area-container">
            <div className="area">
                <div className="container">
                    <div className="card" onClick={()=>gotoCopetition("free")} >
                        Free Competitions
                    </div>
                    <div className="card" onClick={()=>gotoCopetition("paid")}>
                        Paid Competitions
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
