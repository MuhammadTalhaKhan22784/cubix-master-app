import React from 'react'

const MVPDevelopmentSection1 = (props) => {
    return (
        <>
            <h1 className="text-center sd-heading">
               {props.mvdText1} <br /> {props.mvdText2}</h1>

            <p className="text-center s1-para">
                {props.mvdPara1} <br /> <br />
                    {props.mvdPara2}</p>
        </>
    )
}

export default MVPDevelopmentSection1
