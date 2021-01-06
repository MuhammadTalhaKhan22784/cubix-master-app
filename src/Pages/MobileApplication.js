import React from 'react'
import Navbar from "../Layout/Navbar"
import "./Styles/MobileApplication.css"

const MobileApplication = () => {
    let obj = [
        {
            title : "app development",
            discr : "develop visually pleasing apps optimized to swiftly grow your global business revenue",
            active : "active"
        },
        {
            title : "blockchain development",
            discr : "Be it cryptocurrency development or an ICO launch, our blockchain experts create secure decentralized apps.",
            active : ""
        },
        {
            title : "augmented reality",
            discr : "Let your customers experience the beauty and power of AR, VR and motion capture technologies.",
            active : ""
        },
        {
            title : "game development",
            discr : "Build spectacular 2D and 3D multiplayer games for mobile devices powered by addictive gameplay.",
            active : ""
        },
    ]
    return (
        <div>
            <Navbar />
            <div className="header">
                <div className="content">
                    <div>
                        <h1>
                            <span className="span">Full-stack mobile</span>
                            <span className="span">app development </span>
                            <span className="span">company </span>
                        </h1>
                    </div>
                    <div>
                        <span className="span2">Delivering Sophistication through a Refined Process —</span>
                        <span className="span2">We build purpose-driven mobile apps with your success</span>
                        <span className="span2">in mind.</span>
                    </div>

                    <div className="ul">
                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/mobile-app-development/logo/estee-lauder.png" alt="" />
                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/mobile-app-development/logo/sapient.png" alt="" />
                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/mobile-app-development/logo/canon.png" alt="" />
                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/mobile-app-development/logo/artizone.png" alt="" />
                    </div>
                </div>

                <div className="header-form-container">
                    <h2>Request for proposal</h2>

                    <div>
                        <label htmlFor="name">Name</label>
                        <input autoComplete="off" type="text" id="name" />

                        <label htmlFor="email">Email</label>
                        <input autoComplete="off" type="email" id="email" />

                        <label htmlFor="Phone">Phone</label>
                        <input autoComplete="off" type="number" id="Phone" />

                        <label htmlFor="Message">Message</label>
                        <input autoComplete="off" type="text" id="Message" />
                    </div>

                    <button>submit</button>
                </div>
            </div>

            <div className="section1">
                <div className="content1">
                    <h1>Mobile app development services</h1>
                    <h3>We promise you top-notch service as we have the best-in-class web and mobile app development team. With a grade of pure professionals, project delivery is always on schedule with strict adherence to coding standards.</h3>
                </div>

                <div className="cardsMain">
                    {obj.map((item,index) => {
                        return(
                            <div key={index} className={item.active}>
                                <h1>{item.title}</h1>
                                <h4>{item.discr}</h4>
                                <img src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png" alt="image"  />
                            </div>
                        )
                    })}
                </div>
            </div>


            <div className="section2">
            <h1>Work with a globally-recognized </h1>
            <h1>mobile app development company</h1>

            <h1>Mobile application development services hold a gigantic chunk in the economy, estimated to be valued over $6 billion by 2023. We have been in the frontline of mobile app design in USA since we began our journey in 2008.</h1>

            <h1>We are recognized as one of the world’s most desired mobile app development companies. Our mobile app developers, designers, and strategists, are fueled with creativity and passion for app design. This is why our mobile app services are recognized among the best in the industry.</h1>
            </div>


            <div className="section3">
                <h1>Mobile app services the Cubix way</h1>
                <p>Whether you are a small-scale business, a startup, or an enterprise looking to build a mobile app, our development process remains the same. We transform your ideas into successful mobile apps that become an integral part of everyone’s lives. With our smooth app development process, the apps we build are engaging, robust, user-friendly, and well-crafted.</p>
            </div>

            <div className="section4">
                
            <div>
                <h1 className="awards">Awards & Recognitions</h1>
            </div>
            <div className="sec4cards">
                <div className="sec4cardsitem">
                    <div >
                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/forbes-technologies-cource1.webp" alt="image" />
                        <h2>forbes technology council</h2>
                        <p>recognized member of forbes technology council</p>
                    </div>
                </div>
                <div className="sec4cardsitem down">
                    <div >
                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/2020%20-Hybrid%20App%20Developers1.webp" alt="image" />
                        <h2>Top hybrid app developers june 2020</h2>
                        <p>Top hybrid app development company</p>
                    </div>
                </div>
                <div className="sec4cardsitem">
                    <div>
                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/2020%20-Hybrid%20App%20Developers1.webp" alt="image" />
                        <h2>Top mobile app </h2>
                        <p>Top mobile app development company in 2020</p>
                    </div>
                </div>
                <div className="sec4cardsitem down">
                    <div>
                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/app_development_compay111.webp" alt="image" />
                        <h2>Top mobile application developers</h2>
                        <p>Top rated app development companies in 2020</p>
                    </div>
                </div>
            </div>

            <div className="awardandarrows">
                <h3>see all our awards</h3>

                <div>
                    <img src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png" alt="image" />
                    <img src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png" alt="image" />
                </div>
            </div>
            </div>

            
            
            <div className="section5">
                <div>
                    <h1>Apps developed by Cubix rake in success</h1>
                    <p>It doesn’t matter if you are a small-scale business, a unicorn startup or an enterprise, our development process stays the same, which has awesome written all over it. We begin by asking the number one question “How can I turn my idea into a successful app”. “An app that becomes an integral part of everyone’s life”. The answer: our app development process. We want our apps to be intuitive, appealing, robust and friendly.</p>
                    <p>We aren’t in a rush to escalate your project as we believe in detailed evaluation of a product, through various stages including Planning, sketching, wireframing, prototyping, developing, quality assurance, and launching an MVP. Our goal is to create mobile apps that are bound to rake in popularity, downloads and marvelous word of mouth.</p>
                    <p>You can find Cubix’s leading mobile app development team in USA, Florida, Dubai, and Karachi.</p>
                </div>
            </div>
            


            <div className="section6">
                <div className="content1">
                    <h1>App development process</h1>
                    <h3>Being among the top mobile app development companies, Cubix guarantees intuitive mobile apps that are performance-oriented and a lifestyle toolkit. We convert untapped ideas into mobile apps!</h3>
                </div>
                
                <div className="sec5CardsMain">
                    <div className="sec5card">
                        <h1>01</h1>
                        <h3>plan</h3>

                        <ul>
                            <li><p>Business analysis</p></li>
                            <li><p>Documenting specifications</p></li>
                            <li><p>Preparing wireframess</p></li>
                            <li><p>Getting client approval</p></li>
                        </ul>
                    </div>
                    <div className="sec5card">
                        <h1>02</h1>
                        <h3>Design</h3>

                        <ul>
                            <li><p>Crafting app prototype</p></li>
                            <li><p>Making changes</p></li>
                            <li><p>Getting client approval</p></li>
                            <li><p>Implementing feedback</p></li>
                        </ul>
                    </div>
                    <div className="sec5card">
                        <h1>03</h1>
                        <h3>Development</h3>

                        <ul>
                            <li><p>Development strategy</p></li>
                            <li><p>Testing strategy</p></li>
                            <li><p>Product development</p></li>
                            <li><p>Product release</p></li>
                        </ul>
                    </div>
                </div>
               
            </div>


            <div className="section5">
                <div>
                    <h1>World-famous mobile application development company</h1>
                    <p>Mobile apps indeed hold a significant chunk of the market, currently (about 58%), making it important for your business to invest in one. If you have a wide customer base from your e-commerce website, imagine the power of pairing that with a mobile app!</p>
                    <p>Cubix is a popular mobile app development company that helps you achieve your goals. We examine your particular need and work to develop your app solution to perfection! And it all starts with a rock-solid plan that not only sets the parameters of your project features, but also minutely defines and strategizes the length and breadth of programming required. This concrete plan is matched against a strict timeline to ensure delivery on time.</p>
                    <p>Every customer is important to us, as we believe in taking everyone who approaches us to the next level. So, no matter what kind of app you are desirous of building; we can build anything for you from scratch.</p>
                </div>
            </div>


            <div className="section6">
                    <h1>Mobile app development – technology stack</h1>
                    <p>We create mobile apps with scalable and tested technology stack to deliver apps par excellence.</p>


                    <div className="sec61Child">
                        <div className="leftSideChild">
                            <h3>language</h3>
                            <div className="items">
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/javalogo.png" alt="" />
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/language-logo-2.png" alt="" />
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/js-logo.png" alt="" />
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/swift-logo.png" alt="" />
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/objective-c.png" alt="" />
                            </div>
                            <h3>Database</h3>
                            <div className="items">
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/core-data.png" alt="" />
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/room-database.png" alt="" />
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/realm.png" alt="" />
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/SQLitelogo.png" alt="" />
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/redux.png" alt="" />
                            </div >
                            <h3>Framework</h3>
                            <div className="items">
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/Alamofire.png" alt="" />
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/firebase.png" alt="" />
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/FFmpeg.png" alt="" />
                            </div>
                        </div>

                        <div className="javaright6">
                            <div>
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/seo-pages/mobile-seo/javalogo.png" alt="image" />
                                <span><h2>java</h2></span>
                            </div>

                            <p>We offer SMBs, startups, and enterprises, innovation to digitize their businesses, through our expertise in Java for Android apps, game apps, and more.</p>
                            <p>As an official language for Android app development, Java is the easiest one to work with for your first mobile app.</p>
                        </div>
                       
                    </div>
            </div>


            <div className="section7">
                <div>
                    <h1>
                        <span>How much does it</span>
                        <span>cost to create mobile </span>
                        <span>applications?</span>
                    </h1>
                    <p>We help you build your app with custom features and intuitive designs. Tell us about your project and receive project costs for custom mobile app development in your email.</p>
                    <button>reade more</button>
                </div>
            </div>
            
        </div>

            

    )
}

export default MobileApplication
