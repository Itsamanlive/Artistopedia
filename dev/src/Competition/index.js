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
    let [file,fileState] = React.useState({
        file:null
    })

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
        fileState({
            file:e.target.files[0]
        })
    }

    async function upload(){
        let formData = new FormData();
        formData.append("audio_file", file.file);
        formData.append("username",window.user);
        
        await axios.post('http://localhost:8080/upload', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        }).then(response=>{
            window.notify(response.data.msg)
            if(response.status){
                statState({
                    stat:(
                        <div className="uploaded" style={{fontSize:"3rem"}}>
                            ✔
                        </div>
                    )
                })
            }
            else{
                statState({
                    stat:(
                        <div className="uploaded" style={{fontSize:"3rem"}}>
                            ❌
                        </div>
                    )
                })
            }
        })
    }

    React.useEffect(()=>{
        if(window.user){
            console.log(window.user)
        }
        else{
            window.location = "/"
        }
    })

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
                    <button id="submit" className="btn" onClick={upload}>
                        upload
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
