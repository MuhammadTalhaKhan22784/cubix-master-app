import React from 'react'

const MVPDevelopmentSection4Data = (props) => {
    return (
        <>
            <div className="col-6">
                <div className="s4-box">
                    <img src={props.cardImg1} alt="" className="img-fluid s4-emoji" />
                    <h3 className="text-center">{props.cardText}</h3>
                    <img src={props.cardImg2} alt="" className="img-fluid s4-building" />
                </div>
            </div>

        </>
    )
}

export default MVPDevelopmentSection4Data
