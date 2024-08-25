import { Link } from "react-router-dom";
import siteLogo from "../site-logo.png"


import React, { Component } from 'react'

class Navbar extends Component {
    // state = {
    //     loggedout:''
    // } 

    logout = () => {
        localStorage.clear();
        this.props.setUser(null);
    }

  render() {         

        let buttons;
        let profile;
        if(localStorage.getItem('token')){
            buttons = (
                <div>
                    <Link className="px-3" to='/logout' onClick={this.logout}>Logout</Link>
                </div> 
            )
            profile = (
                <div>
                    <Link className="nav-link" to="/profile">Profile</Link>
                </div>
            )
        }else{
            buttons = (
                <div>
                    <Link to="/login" className="px-3">Login</Link>
                    <Link to="/register" className="px-3">Register</Link>
                </div>
            )
        }

    return (
        <>
        <div className="container-fluid customer-login">
            <div className="row">
            <div className="col-auto me-auto"></div>
                <div className="col-auto mt-1 mb-1 px-5">
                    {/* <Link to="/login" className="px-3">Login</Link>
                    <Link to="/register" className="px-3">Register</Link> */}
                    {buttons}
                </div> 
            </div>
        </div>
    <nav className="navbar navbar-expand-lg nav-format">
        <div className="container">
        <Link className="navbar-brand fs-3" to="/"><img src={siteLogo} style={{width: "60px", borderTopLeftRadius: "50%", borderBottomRightRadius: "50%"}} alt="..."/> Digital Agency</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    {/* <Link className="nav-link" to="/profile">Profile</Link> */}
                    {profile}
                </li>
            </ul>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fs-5" id="navbarNavDropdown">
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
}

export default Navbar;
