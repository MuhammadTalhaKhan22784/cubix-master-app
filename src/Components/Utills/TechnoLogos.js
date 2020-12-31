import React from 'react'

const TechnoLogos = (props) => {
    return (
        <>
            <div className="techno-logos-items">
                <img src={props.imageSource}/>
                <span>{props.imageSourceText}</span>
            </div>
        </>
    )
}

export default TechnoLogos
