import React from 'react'

const TabItems = (props) => {
    return (
        <>
            <div className="tabs-icons">
                <div>
                    <img src={props.imgSource} />
                </div>
                <span>{props.imgText}</span>
            </div>

        </>
    )
}

export default TabItems
