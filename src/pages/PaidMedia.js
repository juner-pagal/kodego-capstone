import servicesPaidMedia from "../assets/images/services/services-paid-media.png"
import MarqueeSection from "../components/MarqueeSection";
import { Link } from "react-router-dom";
function PaidMedia(){
    return(
        <>
        <div className="card-image-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 services-holder mt-5 mb-5 p-5">
                        <h6 className="display-6 mt-5">Paid Media</h6>
                        <h5 className="display-5 fw-bolder mt-4">Reach Your Ideal Customers At Every Stage of Their Journey</h5>
                        <p className="fs-5 mt-4">Powered by data, executed by channel experts, optimized with actionable insights</p>
                        <Link to="/contact"><button className="btn btn-primary mt-4 mb-4" >GET STARTED</button></Link>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="https://junerpagal.com/images/images/services/services-paid-media.png" style={{width: "35rem", padding: "0px"}} alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        <h4 className="display-4 mt-5 mb-4 text-center fw-bolder">What’s in it for you</h4>
            <div className="container-fluid p-5">

                <div className="row align-items-center mb-5 whats-in">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Full-Funnel Performance</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">Our experts design and implement a custom full-funnel paid media plan, optimizing every touchpoint from awareness to conversion for maximum performance throughout the customer journey. From comprehensive market research to precise audience targeting and compelling campaign creation, we drive measurable results.</p>
                    </div>
                </div>

                <div className="row align-items-center mb-5 whats-in">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Incrementality</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">Enhance your cross-platform strategy with our comprehensive testing and measurement framework. Designed to unlock incremental gains and foster sustainable growth, our approach ensures optimized performance and higher ROI over time.</p>
                    </div>
                </div>

                <div className="row align-items-center mb-5 whats-in">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Robust Analytics & Insights</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">Gain deep, real-time campaign insights with our cross-platform reporting suite. We empower you to make data-driven decisions, optimize targeting, and refine messaging for maximum impact. Our thorough performance analysis enhances campaign efficiency, ensuring optimal budget allocation and continuous optimization.</p>
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

export default PaidMedia;