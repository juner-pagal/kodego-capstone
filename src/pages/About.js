import aboutUs from '../assets/images/about-our-story.png';
import ourExpertise from '../assets/images/about-expertise.png';

import wedoStrategy from "../assets/images/wedo/wedo-strategy.png"; //subject for change
import wedoPaidMedia from "../assets/images/wedo/wedo-paidmedia.png"; //subject for change
import wedoInfluencerMarketing from "../assets/images/wedo/wedo-influencermarketing.png";//subject for change
import wedoData from "../assets/images/wedo/wedo-data.png";//subject for change

function About(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 p-5">
                    <p className="fs-4 fw-bold">Our Story</p>
                    <p className="fs-5">Established in 2014, JJC Digital Agency quickly rose to prominence in the paid social industry with the advent of Facebook’s advertising platform.  As one of Meta’s pioneering Marketing Partners, we have remained at the forefront of innovation. Inc. in 2019, our continued success is propelled by our flawless planning and execution, enabling us to expand our clients’ reach and drive performance efficiently.</p>
                </div>
                <div className="col-md-6 text-center">
                    <img src={aboutUs} style={{width: "35rem", padding: "0px"}} alt="..."/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 text-center">
                    <img src={ourExpertise} style={{width: "35rem", padding: "0px"}} alt="..."/>
                </div>
                <div className="col-md-6 p-5">
                    <p className="fs-4 fw-bold">Our Expertise</p>
                    <p className="fs-5">Our deep-rooted expertise thrives within the ever-changing digital ecosystem, where we masterfully navigate a diverse array of platforms, each offering unique opportunities to connect and engage with audiences. From the expansive reach of Facebook and Instagram to the viral momentum of TikTok and Snapchat, we strategically leverage the visual allure of Pinterest, the community-centric focus of NextDoor, and the robust discourse on Reddit. Our proficiency extends to X, where real-time conversations shape public sentiment, and MNTN (CTV), where connected TV revolutionizes the viewing experience.</p>
                </div>
            </div>

            <div className='row'>
            <h3 className="display-5 mt-5 fw-bold text-center">Our Values</h3>
                <div className="container mt-5">
                    <div className="row">
                            <div className="card mx-auto mt-3" style={{width: "35rem", padding: "0px"}}>
                                <div className="h-100">
                                    <img src={wedoStrategy} className="card-img-top card-image-bg" alt="..." style={{margin: "0px 0px"}}/>
                                    <div className="card-body">
                                        <p className="card-title fw-bolder fs-3">We move fast and learn faster.</p>
                                        <p className="card-text fs-5">Complacency is not in our vocabulary – and stretching our minds is in our DNA. We’re not afraid to question the norm and roll up our sleeves to find solutions, quicker than anyone else. We’re a work in progress, but we embrace a growth mindset and strive to make our tomorrow selves proud.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card mx-auto mt-3" style={{width: "35rem", padding: "0px"}}>
                                <div className="h-100">
                                    <img src={wedoPaidMedia} className="card-img-top card-image-bg" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-title fw-bolder fs-3">We take collaboration seriously.</p>
                                        <p className="card-text fs-5">Collaboration is at the core of our success. We champion transparency and know that clear and honest communication is the driving force behind every great partnership. It isn’t just about getting the job done but working alongside our teammates and partners to get it done right.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card mx-auto mt-3" style={{width: "35rem", padding: "0px"}}>
                                <div className="h-100">
                                    <img src={wedoInfluencerMarketing} className="card-img-top card-image-bg" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-title fw-bolder fs-3">We focus on outcomes.</p>
                                        <p className="card-text fs-5">Good things come to those who work smarter, not harder. As a performance-driven organization, we set ambitious goals and share accountability for achieving them. As our industry evolves, we continue to deliver exceptional outcomes, doing right by our clients, consumers, and ourselves every day.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="card mx-auto mt-3" style={{width: "35rem", padding: "0px"}}>
                                <div className="h-100">
                                    <img src={wedoData} className="card-img-top card-image-bg" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-title fw-bolder fs-3">We are growth-minded.</p>
                                        <p className="card-text fs-5">We are nimble and adaptable. We are redefining the performance marketing landscape through perpetual ideation, optimization, and creative problem-solving. Innovation is the fuel that makes our engine run and creates new growth opportunities for our business and people. We love a challenge and will continue to climb to the top of the industry, as we have been doing so since 2014.</p>
                                        
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-fluid services-sub-desc mt-4">
            <div class="row">
                <h6 className="display-6 mt-5 mb-5 fw-bold text-center">Meet Our Team</h6>
                
            </div>
        </div>
        
        </>
        
    )
}

export default About;