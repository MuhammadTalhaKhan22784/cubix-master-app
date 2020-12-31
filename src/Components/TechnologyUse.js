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
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-ios2x.svg"
                                        imgText="Ios"
                                    />
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-android2x.svg"
                                        imgText="Android"
                                    />
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-react-native2x.svg"
                                        imgText="React Native"
                                    />
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-flutter2x.svg"
                                        imgText="Flutter"
                                    />
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-ionic2x.svg"
                                        imgText="Ionic"
                                    />
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-swift2x.svg"
                                        imgText="Swift"
                                    />
                                </div>
                                <div className="tab-cards-items-2">
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-kotlin2x.svg"
                                        imgText="Kotlin"
                                    />

                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-objectivec2x.svg"
                                        imgText="Objectivec" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-frontEnd" role="tabpanel" aria-labelledby="pills-frontEnd-tab">
                            <div className="front-tab-cards container">
                                <div className="tab-cards-items-1">
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-angular-js2x.svg"
                                        imgText="Angular .js"
                                    />
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-react-native2x-1.svg"
                                        imgText="React .js"
                                    />
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-typescript2x-2.svg"
                                        imgText="Typescript"
                                    />
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-vue2x.svg"
                                        imgText="Vue"
                                    />
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-wpf2x.svg"
                                        imgText="Wpf"
                                    />
                                    <TabItems
                                        imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-html52x.svg"
                                        imgText="Html5"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-database" role="tabpanel" aria-labelledby="pills-database-tab">
                            <div className="database-tab-cards container">
                                <div className="tab-cards-items-1">
                                    <TabItems
                                    imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-mango-db.svg"
                                    imgText="Mongo db "
                                    />
                                    <TabItems 
                                     imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-my-sql2x.svg"
                                    imgText="Mysql"
                                    />
                                    <TabItems 
                                     imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-ms-sql2x1.svg"
                                    imgText="Mssql"
                                    />
                                    <TabItems 
                                     imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-firebase2x.svg"
                                    imgText="Firebase"
                                    />
                                    <TabItems 
                                     imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-dynamodb2x.svg"
                                    imgText="Dynamodb"
                                    />
                                    <TabItems 
                                     imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-redis2x.svg"
                                    imgText="Redis"
                                    />
                                </div>
                            </div>

                        </div>

                        <div class="tab-pane fade" id="pills-backEnd" role="tabpanel" aria-labelledby="pills-backEnd-tab">
                            <div className="backEnd-tab-cards container">
                                <div className="tab-cards-items-1">
                                    <TabItems 
                                    imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-php2x.svg"
                                    imgText="Php"
                                    />
                                    <TabItems 
                                    imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-java2x.svg"
                                    imgText="Java"
                                    />
                                    <TabItems 
                                    imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-node-js2x.svg"
                                    imgText="Node .js"
                                    />

                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="pills-cms" role="tabpanel" aria-labelledby="pills-cms-tab">
                            <div className="backEnd-tab-cards container">
                                <div className="tab-cards-items-1">
                                    <TabItems 
                                    imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-wordpress2x.svg"
                                    imgText="Wordpress"
                                    />
                                    <TabItems 
                                    imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-magento2x.svg"
                                    imgText="Magento"
                                    />
                                    <TabItems 
                                    imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-shopify-plus2x.svg"
                                    imgText="Shopify"
                                    />

                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="pills-infra-devops" role="tabpanel" aria-labelledby="pills-infra-devops-tab">
                            <div className="infra-tab-cards container">
                                <div className="tab-cards-items-1">
                                    <TabItems  
                                    imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-aws2x.svg"
                                    imgText="Aws"
                                    />
                                    <TabItems  
                                    imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-gradle2x.svg"
                                    imgText="Gradle"
                                    />
                                    <TabItems  
                                    imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-jenkins2x.svg"
                                    imgText="Jenkins"
                                    />
                                    <TabItems  
                                    imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-appium2x.svg"
                                    imgText="Appium"
                                    />
                                    <TabItems  
                                    imgSource="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-selenium2x-1.svg"
                                    imgText="Selenium"
                                    />
                                </div>
                                <div className="infra-tab-cards-items-2">
                                    <TabItems  
                                    imgSource="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAACeCAMAAACrZg5FAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC9FBMVEUlKzP///8lKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMAAABDrBQUAAAA+nRSTlMAACFNAjHNVUnlxmnvUwiGxw4Up2IowNQPQNxyXvAc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"
                                    imgText="Azure"
                                    />
                                    <TabItems  
                                    imgSource="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC1lBMVEUlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMAAADZ47wBAAAA8HRSTlMACB00TGZ6i5ynsri6t6iNZ001IAkaP2yZvd7x8+DDn3RJBCJYlMfv9dWmCj2EyNylYSMGQNnAcygpf9T4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"
                                    imgText="Digital ocean"
                                    />
                                    <TabItems  
                                    imgSource="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACjCAMAAABMv1c6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC/VBMVEUlKzP///8lKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMlKzMAAAC2579mAAAA/XRSTlMAAFnY5O3m3M26oIJdOBgJWvzw3cee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"
                                    imgText="Rackspace"
                                    />
                                    <TabItems  
                                    imgSource="data:img/png;base64,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"
                                    imgText="Linode"
                                    />
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
