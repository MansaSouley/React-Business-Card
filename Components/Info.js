import React from "react"

export default function Info(){
    return (
        <div className="info">
            <h1>Mansa Souley</h1>
            <h3>Senior Application engineer</h3>
            <p>MansaSouley.btc</p>
            <div className="info--btns">
                <button type="button">
                 <img src="../Images/email.png" />Email
                </button>
                <button type="button" className="info--linkedin-btn">
                    <img src="../Images/linkedin.png" />LinkedIn
                </button>            
            </div>
        </div>
    )
}