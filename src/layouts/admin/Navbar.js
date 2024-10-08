import { Link, Navigate } from "react-router-dom";
import siteLogo from "../../site-logo.png"


import axios from "axios";
import React, { Component } from 'react'
import AppURL from "../../api/AppURL";
import MyRouter from "../../router";

class Navbar extends Component {

    // constructor(){
    //     super();
    //     this.state={
    //         data: []       // State to store the fetched data
            
    //     }
    // }
    // componentDidMount(){
    //     axios.get(AppURL.AllServices).then(response =>{
    //         this.setState({
    //             data: response.data,
    //         });
    //     }).catch(error=>{
    //         if(error){
    //             return "Something went wrong";
    //         }
    //     })

    // }

        


//------------------------------------------------
    state = {
        loggedout:''
    } 

    logout = () => {
        localStorage.clear();
        // this.props.setUser(null);
        return <MyRouter />
        // Redirect to the login page or homepage (optional)
        window.location.href = "/admin/login"; // or "/"

        // Reload the page
        window.location.reload();
        
    }

  render() {         
    //calling for Services menu
    // const { data } = this.state;
    
    
    //end of services Menu
        let buttons;
        let dashboard;
        if(localStorage.getItem('token')){
            buttons = (
                <div>
                    <Link to="/admin/login" onClick={this.logout} style={{cursor: "pointer", color:"#fff"}}>Logout</Link>
                </div> 
            )
            dashboard = (
                <div>
                    <Link className="nav-link" to="/admin">Dashboard</Link>
                </div>
            )
        }else{
            buttons = (
                <div>
                    <Link to="/admin/login" className="px-3">Login</Link>
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
        <img src="https://junerpagal.com/images/images/site-logo.png" style={{width: "60px", borderTopLeftRadius: "50%", borderBottomRightRadius: "50%"}} alt="..."/> <p className="px-2" style={{color: "#fff"}}>Digital Agency</p>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    {/* <Link className="nav-link" to="/profile">Profile</Link> */}
                    {dashboard}
                </li>
            </ul>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fs-5" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                </Link>
                    <ul className="dropdown-menu p-2"  style={{backgroundColor:"#3581B8"}}>
                        <li><Link className="nav-link" to="/admin/serviceslist">View Services</Link></li>
                        <li><Link className="nav-link" to="/admin/addservices">Add Services</Link></li>
                            
                            <ul style={{listStyle:"none"}}>
                                <li><Link className="nav-link mx-1 fs-6 " to="/admin/services/add-service-details" style={{listStyle:"none"}}>Add Service's Details</Link></li> 
                            </ul>
                        
                    </ul>
            </li>

            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Team
                </Link>
                    <ul className="dropdown-menu p-2"  style={{backgroundColor:"#3581B8"}}>
                        <li><Link className="nav-link" to="/admin/team/team-list">Team Member</Link></li>
                        <li><Link className="nav-link" to="/admin/team/add-team">Add Team Member</Link></li>
                        
                    </ul>
            </li>
                <li className="nav-item">
                <Link className="nav-link" to="admin/aboutpage">About Page</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="admin/contactpage">Contact Page</Link>
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
