import React from 'react'
import MyVerticallyCenteredModal from '../Modals/Modal'

const BackgroundSectionData = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

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
                    <button onClick={() => setModalShow(true)}>LET'S TALK</button>

                </div>
                <MyVerticallyCenteredModal

                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>

        </>
    )
}

export default BackgroundSectionData
