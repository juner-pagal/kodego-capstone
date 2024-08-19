import React from "react";
import MarqueeSection from "../components/MarqueeSection"
import influencer from "../assets/images/our-work/influencer.png";
import funnel from "../assets/images/our-work/funnel-strategy.png";
import drivingSales from "../assets/images/our-work/driving-sales.png";
import wedoStrategy from "../assets/images/wedo/wedo-strategy.png";
import wedoPaidMedia from "../assets/images/wedo/wedo-paidmedia.png";
import wedoInfluencerMarketing from "../assets/images/wedo/wedo-influencermarketing.png";
import wedoData from "../assets/images/wedo/wedo-data.png";
import CounterUpPage from "./CounterUpPage";

// import { useState, useEffect } from 'react';
import videoBackground from "../assets/digital-marketing-discussion.mp4";
import { Link } from "react-router-dom";


const Main = () => {
        return(
        <>
                <div className="carousel-inner c-item">  
                    <video src={videoBackground} autoPlay loop muted ></video>
                    {/* https://pixabay.com/videos/digital-affiliate-marketing-110124/ */}
                    <div className="carousel-caption top-0 mt-5">
                        <h1 className="display-2 fw-bolder text-capitalize">We are a Growth-Focused</h1>
                        <h4 className="display-4">Digital Marketing Agency</h4>
                        <p className="mt-5 fs-3">Powered by Experts, Accelerated by Technology, Optimized by Data</p>
                    </div>
                </div>

                <div className="col-md-12 text-center mt-5">
                    <h6 className="display-6" style={{fontWeight: "bold"}}>28+ Billion Impressions Driven Across 10+ Digital Channels</h6>
                    <div className="text-center">
                        <MarqueeSection />
                    </div>
                </div>
                
 {/*Styling Fueling Brand ...  */}
                
            <div className="col-md-12 p-5 fueling">
                <h5 className="display-5 text-center " style={{fontWeight: "bold"}}>
                Fueling Brand Growth Through <br></br>Outstanding Performance
                </h5>
                <div className="row fueling-content mt-5">
                    <div className="col-md-4 px-4">
                        <h6 className="display-6 fw-bold">Powered by Experts</h6>
                        <p className="fw-semibold">JJC Digital Agency brings over two decades of unparalleled industry experience, a team of certified paid media experts, and deeply rooted platform partnerships with major and upcoming digital channels in the market to every partnership. Leveraging our expertise and partnerships, we craft full-funnel paid media plans that captivate customers at every stage, delivering impactful results for global brands.</p>
                    </div>
                    <div className="col-md-4 px-4">
                        <h6 className="display-6 fw-bold">Accelerated by Technology</h6>
                        <p className="fw-semibold">JJC Digital Agency leverages its proprietary technology to seamlessly consolidate data from any source and apply AI creative element tagging all within a unified platform. Combining holistic insights from multiple channels, including platform, offline and third-party data sources, enables you to optimize channel investment, refine targeting precision, and fine-tune message resonance mid-flight all through a single interface.</p>
                    </div>
                    <div className="col-md-4 px-4">
                        <h6 className="display-6 fw-bold">Optimized by Data</h6>
                        <p className="fw-semibold">Leveraging our expertise in performance marketing, data analysis, and robust platform partnerships, we streamline the analysis of your data to unveil crucial trends, identify inefficiencies, and reveal scalable opportunities. Grounded in actionable insights uncovered through data, we tailor full-funnel strategies to align with your KPIs and future growth trajectory.</p>
                    </div>
                </div>
            </div>
            {/* Our Work */}
                <h3 className="display-5 mt-5 fw-bold text-center">Our Work</h3>
                <div className="container mt-5">
                    <div className="row">
                            <div className="card mx-auto mt-3" style={{width: "22rem", padding: "0px"}}>
                                <div className="h-100">
                                    <img src={influencer} className="card-img-top card-image-bg" alt="..." style={{margin: "0px 0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Custome influencer strategy drives QSR promo awareness</h5>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <div class="row">
                                            <div class="col-auto me-auto"></div>
                                            <div class="col-auto">
                                                <Link to="/#"><i className="fa-solid fa-arrow-right-long fs-1 work-link" ></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card mx-auto mt-3" style={{width: "22rem", padding: "0px"}}>
                                <div className="h-100">
                                    <img src={funnel} className="card-img-top card-image-bg" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Full-funnel strategy drives enhanced ROAS for Restore Hyper Wellness</h5>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <div class="row">
                                            <div class="col-auto me-auto"></div>
                                            <div class="col-auto">
                                                <Link to="/#"><i className="fa-solid fa-arrow-right-long fs-1 work-link" ></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card mx-auto mt-3" style={{width: "22rem", padding: "0px"}}>
                                <div className="h-100">
                                    <img src={drivingSales} className="card-img-top card-image-bg" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Driving Sales and Efficiency for an Electronic Retailer</h5>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <div class="row">
                                            <div class="col-auto me-auto"></div>
                                            <div class="col-auto">
                                                <Link to="/#"><i className="fa-solid fa-arrow-right-long fs-1 work-link" ></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            {/* What We do */}
                <h3 className="display-5 mt-5 fw-bold text-center">What We Do</h3>
                <div className="container mt-5">
                    <div className="row">
                            <div className="card mx-auto mt-3" style={{width: "35rem", padding: "0px"}}>
                                <div className="h-100">
                                    <img src={wedoStrategy} className="card-img-top card-image-bg" alt="..." style={{margin: "0px 0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bolder display-6">Strategy</h5>
                                        <p className="card-text fs-5">Collaborating with your team is what we love. Our experts partner with you to craft a tailored paid digital strategy fueled with data. Leveraging industry expertise and best practices, we ensure your startegy is optimal. We're here to help navigate the evolving digital landscape.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card mx-auto mt-3" style={{width: "35rem", padding: "0px"}}>
                                <div className="h-100">
                                    <img src={wedoPaidMedia} className="card-img-top card-image-bg" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bolder display-6">Paid Media</h5>
                                        <p className="card-text fs-5">We're here to revitalize your paid digital presence and drive results, tailored to your brand's unique needs. Specializing in paid digital advertising across all major channels and verticals, we blend cutting-edge techniques with proven expertise to reach your audiences with a full-funnel approach.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card mx-auto mt-3" style={{width: "35rem", padding: "0px"}}>
                                <div className="h-100">
                                    <img src={wedoInfluencerMarketing} className="card-img-top card-image-bg" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bolder display-6">Influencer Marketing</h5>
                                        <p className="card-text fs-5">Leverage influencers to build authentic connections with your new existing audiences, elevating your brand with expert content that aligns with your values. Go beyond organic posts by repurposing influencer generated content (IGC) in expertly-design paid social campaigns to maximize impact across platforms.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="card mx-auto mt-3" style={{width: "35rem", padding: "0px"}}>
                                <div className="h-100">
                                    <img src={wedoData} className="card-img-top card-image-bg" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bolder display-6">Data & AI</h5>
                                        <p className="card-text fs-5">Harness the power of our integrated reporting dashboard to consolidate your data seamlessly. With our advanced AI insights and analytics experts you're able to refine and optimize your digital strategy and online presence, while identifying areas for improvement, with precision.</p>
                                        
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="fuel-content mt-3 p-4" style={{backgroundColor: "#EBE9E9", color: "#3581B8"}}>
                    <CounterUpPage />
                </div>
                
        </>
    )
}



export default Main;