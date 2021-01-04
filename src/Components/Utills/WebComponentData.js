import React from 'react'

const WebComponentData = (props) => {
    return (
        <>
            <div style={{backgroundImage:props.isBgReplace ? 
        `url(https://www.cubix.co/themes/responsiv-clean/assets/images/artificial-intelligence/artificial-intelligence-machine-learning.jpg)`
        : `url(https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/web-development.jpg)`    
        }} className="bg-web-development">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-web-dev-content">
                                <div className="bg-web-icon">
                                    <img src={props.imgIcon} />
                                </div>
                                <h2>{props.bgText}</h2>
                                <p>{props.bgPara}</p>
                                <button>LET'S GET STARTED</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebComponentData
