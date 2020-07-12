import React from 'react';
import "./dashboard.css";

const Dashboard = (props) =>{
    let type = props.location.state.type;
    function gotoCopetition(name){
        props.history.push({
            pathname: '/competition',
            state: {
              name:name
            }
        })
    }  

    const Area = (props) =>{
        return(
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
        )
    }

    const Pay = (props) =>{
        return(
            <div className="payment">
                <div className="title">
                    Payment
                </div>
                <div className="form">
                    <div className="in-1">
                        <input placeholder="Card Number"/>
                    </div>
                    <div className="in-2">
                        <input placeholder="Name" style={{borderRight:"none"}} />
                        <input placeholder="Date" style={{border:"none"}} />
                        <input placeholder="CVV" style={{borderLeft:"none"}} />
                    </div>
                </div>
                <div className="pay">
                    <button className="btn" onClick={()=>compState({comp:<OTP />})} >
                        Pay
                    </button>
                </div>
            </div>
        )
    }

    const OTP = (props) =>{
        return(
            <div className="payment">
                <div className="title">
                    Payment
                </div>
                <div className="form" style={{height:"9vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div className="in-1">
                        <input placeholder="Enter OTP"/>
                    </div>
                </div>
                <div className="pay">
                    <button className="btn" onClick={()=>compState({comp:<Area />})} >
                        Submit
                    </button>
                </div>
            </div>
        )
    }

    let [comp,compState] = React.useState({
        comp:type === "free" ? <Area /> : <Pay />
    })

    return(
        <div className="dash-container">
            <div className="dashboard">
                {comp.comp}
            </div>
        </div>
    )
}

export default Dashboard;
