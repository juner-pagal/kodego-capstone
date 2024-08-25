import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Logout extends Component {
    
  render() {
    
    return (
        <div className='mt-3 col-md-4 offset-md-4 text-center'>
            <h3 className='text-center mt-5'>Successfully Logged Out</h3>
            <Link to="/login" className="px-3 fs-2" style={{textDecoration: "none"}}>Login</Link>
        </div>
    )
  }
}

export default Logout;
