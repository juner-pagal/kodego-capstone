import { Link } from "react-router-dom";
import siteLogo from "../site-logo.png"



function Navbar() {
    return(
        <>
        <div className="container-fluid customer-login">
        <div className="row">
        <div class="col-auto me-auto"></div>
            <div class="col-auto mt-1 mb-1 px-5">
                <Link to="/#">Customer Login</Link>
            </div>
        </div>
        </div>
        <nav className="navbar navbar-expand-lg nav-format">
            <div className="container">
            <Link className="navbar-brand fs-4" to="/"><img src={siteLogo} style={{width: "100px", borderTopLeftRadius: "50%", borderBottomRightRadius: "50%"}} alt="..."/> Digital Agency</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fs-4" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </Link>
                        <ul className="dropdown-menu px-3 fs-5"  style={{backgroundColor:"#3581B8"}}>
                            <li><Link className="nav-link" to="services/strategy">Strategy</Link></li>
                            <li><Link className="nav-link" to="services/paid-media">Paid Media</Link></li>
                            <li><Link className="nav-link" to="services/inluencer-marketing">Influencer Marketing</Link></li>
                            <li><Link className="nav-link" to="services/data-ai">Data & AI</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
     </>   
     
    )
}


export default Navbar;