import { Link } from "react-router-dom";
import siteLogo from "../site-logo.png"
function Footer() {
    return(
        <>
        <div className="container-fluid mt-5" style={{backgroundColor: "#3581B8", color: "white"}}>
            <div className="row container">
                <img src={siteLogo} style={{width: "100px", borderTopLeftRadius: "50%", borderBottomRightRadius: "50%"}} alt="..."/>
                <p className="fs-5">Digital Agency</p>
            </div>
            <div className="row">
                <div className="col-md-3 p-4">
                    <p className="fs-5">Our Location</p>
                    <p>Maasin City, Southern Leyte, Philippines</p>
                </div>
                <div className="col-md-2 p-4">
                    <p className="fs-5">Services</p>
                    <div className="footer-link">
                        <ul>
                            <li><Link to="services/strategy">Strategy</Link></li>
                            <li><Link to="services/paid-media">Paid Media</Link></li>
                            <li><Link to="services/influencer-marketing">Influencer Marketing</Link></li>
                            <li><Link to="services/data-ai">Data & AI</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 p-4">
                    <p className="fs-5">Resources</p>
                    <div className="footer-link">
                        <ul>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/success-stories">Success Stories</Link></li>
                            <li><Link to="/glossary">Glossary</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 p-4">
                    <p className="fs-5">Company</p>
                    <div className="footer-link">
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 p-4">
                    <input className="form-control" type="email" name="email" placeholder="Email" required /><br></br>
                    <div className="text-center">
                        <button className="btn btn-primary" type="button" name="submit" style={{padding: "10px 50px", borderRadius: "25px", border: "2px solid #ffc"}}>Subscribe </button><br></br>
                    </div>
                    <div className="mt-3 text-center">
                        <ul>
                            <Link to="https://www.linkedin.com/"><i className="fa-brands fa-linkedin fs-5 px-2 footer-link"></i></Link>
                            <Link to="https://x.com/"><i class="fa-brands fa-x-twitter fs-5 px-2 footer-link"></i></Link>
                            <Link to="https://www.facebook.com/"><i class="fa-brands fa-square-facebook fs-5 px-2 footer-link"></i></Link>
                            <Link to="https://www.instagram"><i class="fa-brands fa-square-instagram fs-5 px-2 footer-link"></i></Link>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row p-1">
                            <div className="col-auto me-auto">
                                &copy; Copyright 2024
                            </div>
                            <div className="col-auto">
                                <div className="footer-link">
                                    <ul>
                                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        
        </>
    )
}

export default Footer;