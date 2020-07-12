import React from 'react';
import axios from 'axios';
import "./competition.css";

const Dashboard = (props) =>{
    let [stat,statState] = React.useState({
        stat:(<div className="upload">
                <input id="upload" type="file" onChange={uploadState} />
                <label htmlFor="upload">➕</label>
            </div>)
    })

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

    function uploadState(e){
        statState({
            stat:(
                <div className="uploaded">
                    🎶{e.target.files[0].name}🎶
                </div>
            )
        })
        document.getElementById("submit").disabled=false;
    }

    async function upload(){
        await axios({
            url:"http://localhost:8080/upload"
        }).then(response=>{
            console.log(response)
        })
    }

    return(
        <div className="comp-container">
            <div className="competition">
                <div className="name">
                    {comp.name}
                </div>
                <div className="details">
                    upload music files to participate
                </div>
                <div className="participate">
                    {stat.stat}     
                </div>
                <div className="submit">
                    <button id="submit" className="btn" disabled={true}>
                        upload
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
