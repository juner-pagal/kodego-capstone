import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Forget extends Component {

    state={
        email:'',
        message:''
    }

    //Forget Form Submit
    formSubmit = (e) => {
        e.preventDefault();
        const data={
            email:this.state.email,
           
        }
        axios.post('/forgetpassword',data)
            .then((response)=>{
            //    console.log(response);
                this.setState({message:response.data.message});
                document.getElementById("forgetForm").reset();
            })
            .catch((error)=>{
                this.setState({message:error.response.data.message});
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
                    <h3 className='text-center'>Forget Password</h3>


                    <form onSubmit={this.formSubmit} id='=forgetForm' className='contact-form p-4'>
                        {error}
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="email" name='email' className="form-control" id="email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                        </div>
                    </div>
                    
                    <div className='col-md-12'>
                        <button type="submit" className="btn btn-primary form-control">Reset Password</button>
                    </div>
                    <div className='mt-2'>
                        Have An Account?  <Link to="/login">Login Now</Link>
                    </div>
                    <div className='mt-2'>
                        Don't Have Account?  <Link to="/register">Register Now</Link>
                    </div>
                
                </form>


                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Forget;
