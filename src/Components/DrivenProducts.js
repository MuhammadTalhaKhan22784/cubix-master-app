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
                    <span>Imagine, Design, Development, Test</span>
                    <h2>LozpData is a software development company that provides cutting edge engineering solutions, helping Fortune 300 companies, Startups And Enterprises to develop premium product during their digital evolution journey.</h2>
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
