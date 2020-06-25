import React from 'react';
import "./competition.css";

const Dashboard = (props) =>{

    function gotoCopetition(id){
        props.history.push({
            pathname: '/competition',
            state: {
              id: id,
            }
        })
    }

    return(
        <div className="comp-container">
            <div className="competition">
                <div className="name">
                    {props.location.state.name}
                </div>
                <div className="details">
                    {/* Competition details.... */}
                </div>
                <div className="participate">
                    <div className="upload">
                        <input id="upload" type="file" />
                        <label htmlFor="upload">➕</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
