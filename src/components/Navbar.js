import { Link } from "react-router-dom";
import siteLogo from "../site-logo.png"
// import { useState } from "react";



function Navbar() {
    // Coding for Login
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    // const submitForm = () => {
    //     // create API
    // }

    return(
        <>
            <div className="container-fluid customer-login">
                <div className="row">
                <div className="col-auto me-auto"></div>
                    <div className="col-auto mt-1 mb-1 px-5">
                        <Link data-bs-toggle="modal" data-bs-target="#loginModal">Customer Login</Link>
                    </div>
                    {/* <!-- Login Modal --> */}
                    <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered p-5">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="loginModalLabel">JJC Digital Agency - Customer Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mt-1">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control mb-3" onChange={e=>setEmail(e.target.value)} />
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" onChange={e=>setPassword(e.target.value)} />
                                <div className="text-center">
                                    <button type="button" name="submit" value="Login" className="btn btn-primary mt-4" 
                                    style={{padding: "10px 50px", borderRadius: "25px"}} onClick={submitForm}>Login</button>
                                </div>
                                <p className="mt-3 mb-3">Forgot Password</p>
                                <p className="mt-3">Don't have account? <span className="text-decoration-underline" style={{cursor: "pointer", color: "blue"}}>Register Now!</span></p>
                            </div>
                            
                        </div>
                    </div>
                    </div>
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
                            <li><Link className="nav-link" to="services/influencer-marketing">Influencer Marketing</Link></li>
                            <li><Link className="nav-link" to="services/data-ai">Data & AI</Link></li>
                            <li><Link className="nav-link" to="services/in-housing">In-Housing</Link></li>
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