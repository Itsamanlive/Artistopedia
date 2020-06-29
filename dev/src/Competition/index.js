import React from 'react';
import "./competition.css";

const Dashboard = (props) =>{

    let comps = [
        {
            name:"1 v 1",
        },
        {
            name:"5 men arena",
        },
        {
            name:"10 men arena",
        },
        {
            name:"20 men arena",
        }
    ]

    let comp = comps[props.location.state.name];

    function gotoCopetition(id){
        props.history.push({
            pathname: '/competition',
            state: {
              id: id,
            }
        })
    } 

    function upload(e){
        console.log(e.target)
    }

    return(
        <div className="comp-container">
            <div className="competition">
                <div className="name">
                    {comp.name}
                </div>
                <div className="details">
                    {/* Competition details.... */}
                </div>
                <div className="participate">
                    <div className="upload">
                        <input id="upload" type="file" onChange={upload} />
                        <label htmlFor="upload">➕</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
