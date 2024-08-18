import servicesStrategy from "../assets/images/services/services-strategy.png"
function Strategy(){
    return(
        <>
        <div className="card-image-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 services-holder mt-5 mb-5 p-4">
                        <h6 className="display-6 mt-5">Strategy</h6>
                        <h5 className="display-5 fw-bolder mt-4">Tailoring Your Paid Digital Strategy for Success At Scale</h5>
                        <p className="fs-5 mt-4">Powered by experts, accelerated by technology, and optimized with data</p>
                        <button type="submit" className="btn btn-primary mt-4 mb-4">GET STARTED</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={servicesStrategy} style={{width: "35rem", padding: "0px"}} alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        <h4 className="display-4 mt-5 mb-4 text-center fw-bolder">What’s in it for you</h4>
            <div className="container-fluid p-5">

                <div className="row align-items-center mb-5">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Digital Channel Audit</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">We go beyond traditional media metrics by leveraging your first-party data, core metrics, and Google Analytics to conduct a thorough audit across your paid channels. Led by a team of seasoned ad operations specialists, we uncover vital trends, identify inefficiencies, and unlock scalable opportunities to craft a bespoke full-funnel strategy aligned with your KPIs and business objectives.</p>
                    </div>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Roadmap to Success</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">Together, we develop a comprehensive paid digital strategy to strengthen your brand’s social and industry leadership presence. By leveraging industry best practices and data-driven insights, we craft a scalable program tailored to your current needs and future growth.</p>
                    </div>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-md-4 p-4 services-sub">
                        <p className="fs-3 text-center align-items-center">Industry Expertise</p>
                    </div>
                    <div className="col-md-8 p-4 services-sub-desc shadow">
                        <p className="px-4 py-4 fs-5">As performance marketing experts and partners with the leading social platforms, we keep up-to-date with the latest digital news and trends. We are your eyes and ears to help navigate the ever-changing digital space and identify opportunities as well as pitfalls.</p>
                    </div>
                </div>
                <div className="text-center">
                    <button className="get-in-touch fs-4" type="button">GET IN TOUCH</button>
                </div>
            </div>
        </>
        
    )
}

export default Strategy;