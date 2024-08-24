import React, { Component } from 'react'

class Profile extends Component {
  render() {

    let name;
    let email;
    if(this.props.user){
        name = this.props.user.name;
        email = this.props.user.email;
    }

    return (
      <div>
        
        <div className='container col-md-4 offset-md-4'>
            <h6 className='display-6 text-center mt-3'>User Profile</h6>
            <ul className='list-group'>
                <li className='list-group-item fw-bold'>Name: { name }</li>
                <li className='list-group-item fw-bold'>Email: { email }</li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Profile;
