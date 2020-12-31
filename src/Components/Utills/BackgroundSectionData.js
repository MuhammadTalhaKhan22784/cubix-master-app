import React from 'react'

const BackgroundSectionData = (props) => {
    return (
        <>
            <div className="bg-slider">
                        <div className="bg-slider-heading">
                            <h2>{props.bgTest1}</h2>
                            <h2>{props.bgTest2}</h2>
                        </div>
                        <div className="bg-slider-para">
                            <p>{props.bgPara}</p>
                        </div>
                        <div className="bg-slider-btn">
                            <button>LET'S TALK</button>
                        </div>

                    </div>
        </>
    )
}

export default BackgroundSectionData
