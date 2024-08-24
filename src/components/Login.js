import axios from 'axios';
import React, { Component } from 'react'
import { Link, Navigate} from 'react-router-dom';



class Login extends Component {
    state={
        email:'',
        password:'',
        message:''
    }
    //Login Form Submit
    formSubmit = (e) => {
        e.preventDefault();
        const data={
            email:this.state.email,
            password:this.state.password
        }
        axios.post('/login',data)
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
    //After Login Redirect to Profile
    if(this.state.loggedIn){
        return <Navigate to={'/profile'} />
    }

    return (
      <div>
        <div className='container'>
            <div className='row'>
                <div className='mt-3 col-md-4 offset-md-4'>
                    <h3 className='text-center'>Login Account</h3>


                    <form className='contact-form p-4' onSubmit={this.formSubmit}>
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
                </div>
                <div className='mt-3'>
                    Forgot Password  <Link to="/forgot-password">Click Here</Link>
                    
                </div>
                
                </form>


                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Login;
