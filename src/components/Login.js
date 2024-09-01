import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Link} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppURL from '../api/AppURL';

class Login extends Component {

    constructor(){
        super();
        this.state={
             email:'',
             password:'',
             message:'',
             loggedIn:false
        }
   } 
    // Login Form Submit Method 
    formSubmit = (e) => {
        e.preventDefault();
        const data={
             email:this.state.email,
             password:this.state.password
        }
        axios.post(AppURL.UserLogin,data).then(response =>{ 

             localStorage.setItem('token',response.data.token);
             this.setState({loggedIn:true})

             this.props.setUser(response.data.user);

        }).catch(error=>{

        }); 
   }
  render() {
    //After Login Redirect to Profile
    if(this.state.loggedIn){
        return<Navigate to="/profile" />    
    }
    //Show Error Message
    let error="";
    if(this.state.message){
        error=(
            <div>
                <div className='alert alert-danger' role="alert">
                    {this.state.message}
                </div>
            </div>
        )
    }//End of Error Message
    if(localStorage.getItem('token')){
        return <Navigate to="/profile" /> 
        
      }
    return (
      <div>
        <Fragment>
        <div className='container'>
            <div className='row'>
                <div className='mt-3 col-md-4 offset-md-4'>
                    <h3 className='text-center'>Login Account</h3>


                    <form className='contact-form p-4' onSubmit={this.formSubmit}>
                    {error}
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                <div className="row mb-3">
                    
                    <div className="col-sm-12">
                    <input type="email" name="email" className="form-control" id="email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    </div>
                </div>
                <label for="password" className="col-sm-2 col-form-label">Password</label>
                <div className="row mb-3">
                    
                    <div className="col-sm-12">
                    <input type="password" name="password" className="form-control" id="password" required onChange={(e)=>{this.setState({password:e.target.value})}}/>
                    </div>
                </div>
                <div className='col-md-12'>
                    <button type="submit" className="btn btn-primary form-control">Log in</button>
                    <ToastContainer/>
                </div>
                
                <div className='mt-3'>
                    Forgot Password  <Link to="/forgot-password">Click Here</Link>
                    
                </div>
                
                </form>
                    

                </div>
            </div>
        </div>
        </Fragment>
      </div>
    )
  }
}

export default Login;
