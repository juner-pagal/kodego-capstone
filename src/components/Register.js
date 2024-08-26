import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
class Register extends Component {

    state={
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
        message:''
    }

     //Register Form Submit
     formSubmit = (e) => {
        e.preventDefault();
        const data={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation
        }
        axios.post('/register',data)
            .then((response)=>{
                localStorage.setItem('token',response.data.token);
                this.setState({
                    loggedIn:true
                })
                this.props.setUser(response.data.user);
            })
            .catch((error)=>{
                console.log(error);
            });
    }


  render() {
    //After Register Redirect to Profile
    if(this.state.loggedIn){
        return<Navigate to="/profile" />  
    }

    if(localStorage.getItem('token')){
        return<Navigate to="/profile" />  
      }

    return (
        <div>
        <div className='container'>
            <div className='row'>
                <div className='mt-3 col-md-4 offset-md-4'>
                    <h3 className='text-center'>Register Account</h3>


                    <form className='contact-form p-4' onSubmit={this.formSubmit}>
                <label for="name" className="col-sm-2 col-form-label">Name</label>
                <div className="row">
                    <div className="col-sm-12">
                        <input type="text" name="name" className="form-control" id="name" required onChange={(e)=>{this.setState({name:e.target.value})}}/>
                    </div>
                </div>
                <label for="email" className="col-sm-2 col-form-label">Email</label>
                <div className="row">
                    <div className="col-sm-12">
                        <input type="email" name='email' className="form-control" id="email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    </div>
                </div>
                <label for="password" className="col-sm-2 col-form-label">Password</label>
                <div className="row mb-1">
                    
                    <div className="col-sm-12">
                    <   input type="password" name='password' className="form-control" id="password" required onChange={(e)=>{this.setState({password:e.target.value})}}/>
                    </div>
                </div>
                <label for="password" className="col-md-12 col-form-label">Confirmed Password</label>
                <div className="row mb-1">
                    <div className="col-sm-12">
                    <input type="password" name='password_confirmation' className="form-control" id="confirmedpassword" required onChange={(e)=>{this.setState({password_confirmation:e.target.value})}}/>
                    </div>
                </div>
                <div className='col-md-12 mt-3'>
                    <button type="submit" className="btn btn-primary form-control">Register</button>
                </div>
                <div className='mt-2'>
                    Have An Account?  <Link to="/login">Login Now</Link>
                </div>
                
                </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Register;
