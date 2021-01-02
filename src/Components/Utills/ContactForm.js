import React from 'react'

const ContactForm = (props) => {
    return (
        <>
            <div style={{ marginTop: props.isSmallHeading ? '0.5rem' : '2.5rem' }} className="con-right-text">
                <h2 style={{ fontSize: props.isSmallHeading ? '28px' : '42px' }}>Let's start a project together</h2>
                <p style={{ fontSize: props.isSmallHeading ? '1em' : '19px' }}>We make all your dreams come true in a successful project.</p>
            </div>
            <div className="contact-input-fields">
                <div className="mb-3 con-input-fields-1">

                    <input style={{
                        width: props.isSmallHeading ? '98%' : '84%',
                        height: props.isSmallHeading ? '3rem' : '4rem',
                        marginBottom: props.isSmallHeading ? '15px' : '20px'


                    }} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                    <div style={{
                        width: props.isSmallHeading ? '98%' : '84%'
                    }} className="two-inputs">
                        <input style={{
                            width: props.isSmallHeading ? '98%' : '84%',
                            height: props.isSmallHeading ? '3rem' : '4rem',
                            marginBottom: props.isSmallHeading ? '15px' : '20px'


                        }} type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email" />
                        <input style={{
                            width: props.isSmallHeading ? '98%' : '84%',
                            height: props.isSmallHeading ? '3rem' : '4rem',
                            marginBottom: props.isSmallHeading ? '15px' : '20px'


                        }} type="text" className="form-control" id="exampleFormControlInput3" placeholder="Phone" />

                    </div>
                </div>
                <div style={{
                    width: props.isSmallHeading ? '98%' : '84%'


                }} className="mb-3 con-textarea">
                    <textarea style={{
                        height: props.isSmallHeading ? '100px' : '130px'


                    }} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                </div>
                <div style={{
                    width: props.isSmallHeading ? '98%' : '84%'

                }} className="con-button">
                    <button style={{
                        backgroundColor: props.isSmallHeading ? '#4869e8' : '#03b4ff',

                    }}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default ContactForm
