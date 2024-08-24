import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Forget extends Component {
  render() {
    return (
        <div>
        <div className='container'>
            <div className='row'>
                <div className='mt-3 col-md-4 offset-md-4'>
                    <h3 className='text-center'>Forget Password</h3>


                    <form className='contact-form p-4'>
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" id="email"/>
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
