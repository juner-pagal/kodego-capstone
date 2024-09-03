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
import FuelingBrand from "./FuelingBrand";
import WhatWeDo from "./WhatWeDo";


const Main = () => {
        return(
        <>
                <div className="carousel-inner c-item">  
                    <video src="https://junerpagal.com/images/digital-marketing-discussion.mp4" autoPlay loop muted ></video>
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
                <FuelingBrand />
            </div>
            {/* Our Work */}
                <h3 className="display-5 mt-5 fw-bold text-center">Our Work</h3>
                <div className="container mt-5">
                    <div className="row">
                            <div className="card mx-auto mt-3" style={{width: "22rem", padding: "0px"}}>
                                <div className="h-100">
                                    <img src="https://junerpagal.com/images/images/our-work/influencer.png"  className="card-img-top card-image-bg" alt="..." style={{margin: "0px 0px"}}/>
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
                                    <img src="https://junerpagal.com/images/images/our-work/funnel-strategy.png" className="card-img-top card-image-bg" alt="..."/>
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
                                    <img src="https://junerpagal.com/images/images/our-work/driving-sales.png" className="card-img-top card-image-bg" alt="..."/>
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
                    <WhatWeDo />
                <div className="fuel-content mt-3 p-4" style={{backgroundColor: "#EBE9E9", color: "#3581B8"}}>
                    <CounterUpPage />
                </div>
                
        </>
    )
}



export default Main;