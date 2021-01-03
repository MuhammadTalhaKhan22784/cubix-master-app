import React from 'react'

const MVPDevelopmentCardsData = (props) => {
    return (
        <>

            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="s1-card">
                    <div class="d-flex justify-content-between align-items-center s1-card-para">
                        <h2 class="s1-icon text-center">{props.cardNum}</h2>
                        <p>{props.cardText}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MVPDevelopmentCardsData
