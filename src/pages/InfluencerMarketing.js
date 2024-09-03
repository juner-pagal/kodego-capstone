import servicesInfluencerMarketing from "../assets/images/services/services-influencer-marketing.png";
import MarqueeSection from "../components/MarqueeSection";
import { Link } from "react-router-dom";
function InfluencerMarketing(){
    return(
        <>
        <div className="card-image-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 services-holder mt-5 mb-5 p-5">
                        <h6 className="display-6 mt-5">Influencer Marketing</h6>
                        <h5 className="display-5 fw-bolder mt-4">Foster Authentic Connections and Maximize Content Strategies with Influencers</h5>
                        <p className="fs-5 mt-4">Engage, captivate, and convert consumers with Influencer Marketing</p>
                        <Link to="/contact"><button className="btn btn-primary mt-4 mb-4" >GET STARTED</button></Link>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="https://junerpagal.com/images/images/services/services-influencer-marketing.png" style={{width: "35rem", padding: "0px"}} alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        <h4 className="display-4 mt-5 mb-4 text-center fw-bolder">What’s in it for you</h4>
            <div className="container-fluid p-5">

                <div className="row align-items-center mb-5 whats-in">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Influencer Marketing Strategy</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">Experience tailor-made influencer marketing campaigns crafted uniquely for your brand. With a deep understanding of your brand identity and marketing goals, we customize each campaign to achieve specific objectives, ensuring your brand’s message resonates across channels. </p>
                    </div>
                </div>

                <div className="row align-items-center mb-5 whats-in">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Influencer Partnership Management</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">We handle influencer partnerships for you, including negotiating contracts, coordinating product shipments, providing detailed briefs, and more to ensure impactful collaborations. Effective communication and strategic planning are essential for building enduring relationships and maximizing campaign success.</p>
                    </div>
                </div>

                <div className="row align-items-center mb-5 whats-in">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Influencer-Generated Content</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">Boost your brand’s reach by re-purposing influencer content. Transform influencer collaborations into compelling Influencer-Generated Content (IGC), strategically amplified through your channels for wider audience engagement and enhanced visibility.</p>
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

export default InfluencerMarketing;