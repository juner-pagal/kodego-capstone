import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Reset extends Component {

      state={
      token:'',
      email:'',
      password:'',
      password_confirmation:'',
      message:''
    }
    //Reset Form Submit
    formSubmit = (e) => {
      e.preventDefault();
      const data={
          token:this.state.token,
          email:this.state.email,
          password:this.state.password,
          password_confirmation:this.state.password_confirmation
      }
      axios.post('/resetpassword',data)
          .then((response)=>{
              this.setState({message:response.data.message});
              document.getElementById("formsubmit").reset();
              })
          .catch((error)=>{
              this.setState({message:error.response.data.message});
              document.getElementById("formsubmit").reset();
          });
  }

  render() {
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
    return (
      <div>
        <div className='container'>
            <div className='row'>
                <div className='mt-3 col-md-4 offset-md-4'>
                    <h3 className='text-center'>Reset Account</h3>


                    <form className='contact-form p-4' onSubmit={this.formSubmit} id='formsubmit'>
                      {error}
                <label for="pincode" className="col-sm-12 col-form-label">PIN Code</label>
                <div className="row">
                    <div className="col-sm-12">
                        <input type="text" name="token" className="form-control" id="name" required onChange={(e)=>{this.setState({token:e.target.value})}}/>
                    </div>
                </div>
                <label for="email" className="col-sm-12 col-form-label">Email</label>
                <div className="row">
                    <div className="col-sm-12">
                        <input type="email" name='email' className="form-control" id="email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    </div>
                </div>
                <label for="password" className="col-sm-12 col-form-label">New Password</label>
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
                    <button type="submit" className="btn btn-primary form-control">Reset Password</button>
                </div>
                <div className='mt-2'>
                    Have An Account?  <Link to="/login">Login</Link>
                </div>
                
                </form>
                </div>
            </div>
        </div>
      </div>

    )
  }
}

export default Reset;
