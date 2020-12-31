import React from 'react'
import TabItems from '../Components/Utills/TabItems'
const TechnologyUse = () => {
    return (
        <>
            <div className="technoUse-section">
                <div className="technoUse-heading">
                    <h2>Technologies we work with</h2>
                </div>
                <div className="techno-tabs">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item techno-nav-items" role="presentation">
                            <a class="nav-link techno-nav-link active" id="pills-mobile-tab" data-bs-toggle="pill" href="#pills-mobile" role="tab" aria-controls="pills-mobile" aria-selected="true">Mobile</a>
                        </li>
                        <li class="nav-item techno-nav-items" role="presentation">
                            <a class="nav-link techno-nav-link" id="pills-frontEnd-tab" data-bs-toggle="pill" href="#pills-frontEnd" role="tab" aria-controls="pills-frontEnd" aria-selected="false">Front End</a>
                        </li>
                        <li class="nav-item techno-nav-items" role="presentation">
                            <a class="nav-link techno-nav-link" id="pills-database-tab" data-bs-toggle="pill" href="#pills-database" role="tab" aria-controls="pills-database" aria-selected="false">Database</a>
                        </li>
                        <li class="nav-item techno-nav-items" role="presentation">
                            <a class="nav-link techno-nav-link" id="pills-backEnd-tab" data-bs-toggle="pill" href="#pills-backEnd" role="tab" aria-controls="pills-backEnd" aria-selected="false">Back End</a>
                        </li>

                        <li class="nav-item techno-nav-items" role="presentation">
                            <a class="nav-link techno-nav-link" id="pills-cms-tab" data-bs-toggle="pill" href="#pills-cms" role="tab" aria-controls="pills-cms" aria-selected="false">CMS</a>
                        </li>
                        <li class="nav-item techno-nav-items" role="presentation">
                            <a class="nav-link techno-nav-link" id="pills-infra-devops-tab" data-bs-toggle="pill" href="#pills-infra-devops" role="tab" aria-controls="pills-infra-devops" aria-selected="false">Infra and devops</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane container fade show active" id="pills-mobile" role="tabpanel" aria-labelledby="pills-mobile-tab">

                            <div className="tab-cards container">
                                <div className="tab-cards-items-1">
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                </div>
                                <div className="tab-cards-items-2">
                                    <TabItems />
                                    <TabItems />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-frontEnd" role="tabpanel" aria-labelledby="pills-frontEnd-tab">
                            <div className="front-tab-cards container">
                                <div className="tab-cards-items-1">
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-database" role="tabpanel" aria-labelledby="pills-database-tab">
                            <div className="database-tab-cards container">
                                <div className="tab-cards-items-1">
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                </div>
                            </div>

                        </div>

                        <div class="tab-pane fade" id="pills-backEnd" role="tabpanel" aria-labelledby="pills-backEnd-tab">
                            <div className="backEnd-tab-cards container">
                                <div className="tab-cards-items-1">
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />

                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="pills-cms" role="tabpanel" aria-labelledby="pills-cms-tab">
                            <div className="backEnd-tab-cards container">
                                <div className="tab-cards-items-1">
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />

                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="pills-infra-devops" role="tabpanel" aria-labelledby="pills-infra-devops-tab">
                            <div className="infra-tab-cards container">
                                <div className="tab-cards-items-1">
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                </div>
                                <div className="infra-tab-cards-items-2">
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                    <TabItems />
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                {/* <hr /> */}
            </div>
        </>
    )
}

export default TechnologyUse
