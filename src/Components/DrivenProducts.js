import React from 'react'
import PrdCards from './Utills/PrdCards'

const DrivenProducts = () => {

    const AppiconName=["fas fa-mobile-alt fa-3x"]
    const AppiconTextOne=["App"]   
    const AppiconTextTwo=["Development"]
    const GameiconName=["fas fa-mobile-alt fa-3x"]
    const GameiconTextOne=["App"]   
    const GameiconTextTwo=["Development"]

    return (
        <>
            <div className="products-content">
                <div className="prd-con-items">
                    <span>DESIGN. DEVELOPMENT. CONSULTANCY.</span>
                    <h2>Cubix develops result-driven products for entrepreneurs, startups and enterprises.</h2>
                </div>
                <div className="prd-con-cards container">
                    <PrdCards AppiconName={AppiconName} AppiconTextOne={AppiconTextOne} AppiconTextTwo={AppiconTextTwo}/>
                    <PrdCards AppiconName={AppiconName} AppiconTextOne={AppiconTextOne} AppiconTextTwo={AppiconTextTwo}/>
                    <PrdCards AppiconName={AppiconName} AppiconTextOne={AppiconTextOne} AppiconTextTwo={AppiconTextTwo}/>
                    <PrdCards AppiconName={AppiconName} AppiconTextOne={AppiconTextOne} AppiconTextTwo={AppiconTextTwo}/>
                
                </div>
            </div>
        </>
    )
}

export default DrivenProducts
