import servicesDataAI from "../assets/images/services/services-data-ai.png";
import MarqueeSection from "../components/MarqueeSection";
import { Link } from "react-router-dom";
function DataAI(){
    return(
        <>
        <div className="card-image-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 services-holder mt-5 mb-5 p-5">
                        <h6 className="display-6 mt-5">Data & AI</h6>
                        <h5 className="display-5 fw-bolder mt-4">Harness Multichannel Analytics for a Deeper Understanding of Your Data</h5>
                        <p className="fs-5 mt-4">Gathered in one unified place, interpreted by experts, maximizing ROAS</p>
                        <Link to="/contact"><button className="btn btn-primary mt-4 mb-4" >GET STARTED</button></Link>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="https://junerpagal.com/images/images/services/services-data-ai.png" style={{width: "35rem", padding: "0px"}} alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        <h4 className="display-4 mt-5 mb-4 text-center fw-bolder">What’s in it for you</h4>
            <div className="container-fluid p-5">

                <div className="row align-items-center mb-5 whats-in">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">All-in-One Dashboard</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">Optimize analytics with OneVu, our all-in-one reporting dashboard. Consolidate data from diverse channels into a single platform for comprehensive, real-time analysis. Gain holistic insights across multiple channels, including offline and third-party data (3PD), for faster optimizations and maximized performance based on real-time analysis and trends. </p>
                    </div>
                </div>

                <div className="row align-items-center mb-5 whats-in">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Comprehensive Actionable Insights</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">Elevate your digital advertising with OneVu’s comprehensive analytics, enabling you to optimize channel investment, refine targeting precision, and fine-tune message resonance mid-flight. Harness real-time performance metrics to optimize strategies and maximize ROI across all channels.</p>
                    </div>
                </div>

                <div className="row align-items-center mb-5 whats-in">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">AI Powered Recommendation</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">Revolutionize your social media strategy using AI-driven insights that merge creative intelligence tagging with digital performance indicators. Enhances your brand’s impact, drives significant engagement and stimulates growth, all while saving time and costs through streamlined creative analysis and performance optimizations.</p>
                    </div>
                </div>
                <div className="text-center">
                <Link to="/contact"><button className="get-in-touch fs-4" >GET IN TOUCH</button></Link>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <h6 className="display-6 mt-4 mb-5 fw-bold text-center">Clients We Have Helped Grow</h6>
                    <MarqueeSection />
                </div>
            </div>
                
        </>
        
    )
}

export default DataAI;