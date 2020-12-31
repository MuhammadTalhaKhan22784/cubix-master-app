import React from 'react'

const PrdCards = (props) => {

   
    return (
        <>
            <div class="card prd-card">
                <i class={props.AppiconName}></i>
                <div class="card-body">
                    <p class="card-text text-center">{props.AppiconTextOne}<br /> {props.AppiconTextTwo}</p>
                </div>
            </div>
        </>
    )
}

export default PrdCards
