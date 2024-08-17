import { Link } from "react-router-dom";
import siteLogo from "../site-logo.png"
function Footer() {
    return(
        <>
        <div className="container-fluid" style={{backgroundColor: "#3581B8", color: "white"}}>
            <div className="row">
                <img src={siteLogo} style={{width: "100px", borderTopLeftRadius: "50%", borderBottomRightRadius: "50%"}} />
            </div>
            <div className="row">
                <div className="col-md-3 p-4">
                    <p className="fs-5">Corporate HQ</p>
                    <p>Maasin City, Southern Leyte, Philippines</p>
                </div>
                <div className="col-md-2 p-4">
                    <p className="fs-5">Services</p>
                    <div className="footer-link">
                        <ul>
                            <li><Link to="/strategy">Strategy</Link></li>
                            <li><Link to="/paid-media">Paid Media</Link></li>
                            <li><Link to="/influencer-marketing">Influencer Marketing</Link></li>
                            <li><Link to="/data-ai">Data & AI</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 p-4">
                    <p className="fs-5">Resources</p>
                    <div className="footer-link">
                        <ul>
                            <li><Link to="/strategy">Blog</Link></li>
                            <li><Link to="/paid-media">Success Stories</Link></li>
                            <li><Link to="/influencer-marketing">Glossary</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 p-4">
                    <p className="fs-5">Company</p>
                    <div className="footer-link">
                        <ul>
                            <li><Link to="/strategy">About Us</Link></li>
                            <li><Link to="/paid-media">Careers</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 p-4">
                    <input className="form-control" type="email" name="email" required /><br></br>
                    <button className="btn btn-primary mx-auto" type="button" name="submit" style={{backgroundColor: "#FCB07E"}}>Subscribe </button>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Footer;