import servicesInHousing from "../assets/images/services/services-in-housing.png";
import MarqueeSection from "../components/MarqueeSection";
import InhouseExpert from "../assets/images/services/inhouse-expert.png";
import InhouseTraining from "../assets/images/services/inhouse-training.png";
import InhouseCollaborate from "../assets/images/services/inhouse-collaborate.png";
import InhouseEducation from "../assets/images/services/inhouse-education.png";

function InHousing(){
    return(
        <>
        <div className="card-image-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 services-holder mt-5 mb-5 p-5">
                        <h6 className="display-6 mt-5">In-Housing</h6>
                        <h5 className="display-5 fw-bolder mt-4">Transition Your Digital Program In-House Efficiently</h5>
                        <p className="fs-5 mt-4">Harness expert knowledge to build your own marketing powerhouse</p>
                        <button type="submit" className="btn btn-primary mt-4 mb-4">GET STARTED</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={servicesInHousing} style={{width: "35rem", padding: "0px"}} alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        <h4 className="display-4 mt-5 mb-4 text-center fw-bolder">What’s in it for you</h4>
            <div className="container-fluid p-5">

                <div className="row align-items-center mb-5 whats-in">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Recruitment Roadmap</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">Gain access to expert assistance in recruiting top talent for your in-house marketing team, ensuring you have the right skills and expertise to drive results. We’ll streamline the hiring process, from crafting job descriptions & case studies to conducting interviews, so you can focus on building a high-performing team.</p>
                    </div>
                </div>

                <div className="row align-items-center mb-5 whats-in">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Custom Training Programs</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">Elevate your team’s skills and knowledge with personalized training programs tailored to your business’ specific needs and goals. Our comprehensive workshops cover everything from digital marketing & data analytics fundamentals to advanced strategy & analysis support in continued education office hours, empowering your team to excel in all aspects of their roles and stay ahead of industry trends even after you’re successfully running in-house.</p>
                    </div>
                </div>

                <div className="row align-items-center mb-5 whats-in">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Media Execution Support</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">Harness our expertise to execute flawless paid media campaigns across all key digital channels. We’ll collaborate with your team to assist with strategy, implementation, and ongoing optimizations. With our dedicated support, you’ll unlock the full potential of paid advertising while saving time and resources.</p>
                    </div>
                </div>
                <div className="text-center">
                    <button className="get-in-touch fs-4" type="button">GET IN TOUCH</button>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <h6 className="display-6 mt-4 mb-5 fw-bold text-center">Clients We Have Helped Grow</h6>
                    <MarqueeSection />
                </div>
            </div>
            <div className="container-fluid services-sub-desc">
                <div className="row">
                    <h6 className="display-6 mt-5 mb-5 fw-bold text-center">Build Your Own Expert Paid Digital Team In-House</h6>
                    <div className="col-md-6 text-center">
                        <img src={InhouseExpert} style={{width: "35rem", padding: "0px"}} alt="..."/>
                    </div>
                    <div className="col-md-6 p-5">
                        <p className="fs-4 fw-bold">Interview & Hire</p>
                        <p className="fs-5">We alleviate the burden of talent acquisition by expertly handling the interview and hiring process. We streamline candidate selection, ensuring alignment with your brand’s goals. With our support, you’ll build a high-performing in-house team that drives exceptional results.</p>
                        <div className="inhouse">
                            <button type="submit" className="btn custom-btn mt-4 mb-4">LEARN MORE</button>
                        </div>
                    </div>

                    
                    <div className="col-md-6 p-5">
                        <p className="fs-4 fw-bold">Tailored Training</p>
                        <p className="fs-5">Elevate your team’s skills with proven, tailored training programs. Our customized approach ensures that each member receives the knowledge and tools necessary to excel in their roles, driving performance and innovation within your organization.</p>
                        <div className="inhouse">
                            <button type="submit" className="btn custom-btn mt-4 mb-4">LEARN MORE</button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={InhouseTraining} style={{width: "35rem", padding: "0px"}} alt="..."/>
                    </div>

                    <div className="col-md-6 text-center">
                        <img src={InhouseCollaborate} style={{width: "35rem", padding: "0px"}} alt="..."/>
                    </div>
                    <div className="col-md-6 p-5">
                        <p className="fs-4 fw-bold">Collaborate & Strategize</p>
                        <p className="fs-5">Gain access to dedicated support and consultation through scheduled office hours with our experts. Whether you need assistance with strategy development, campaign optimization, or troubleshooting, our team is readily available to provide guidance and solutions to propel your digital marketing efforts forward.</p>
                        <div className="inhouse">
                            <button type="submit" className="btn custom-btn mt-4 mb-4">LEARN MORE</button>
                        </div>
                    </div>

                    <div className="col-md-6 p-5">
                        <p className="fs-4 fw-bold">Continued Education</p>
                        <p className="fs-5">Stay ahead of the curve with our continued education resources, including workshops, on-site visits, and shared industry insights. We provide ongoing learning opportunities to keep your team informed about the latest trends, technologies, and best practices in digital marketing, ensuring success after your program has been transitioned.</p>
                        <div className="inhouse">
                            <button type="submit" className="btn custom-btn mt-4 mb-4">LEARN MORE</button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={InhouseEducation} style={{width: "35rem", padding: "0px"}} alt="..."/>
                    </div>

                </div>
            </div>
            
        </>
        
    )
}

export default InHousing;