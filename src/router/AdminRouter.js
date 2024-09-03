import {Routes, Route} from 'react-router-dom';
import React, { Component } from 'react';
import MasterLayout from '../layouts/admin/MasterLayout';
import Navbar from '../layouts/admin/Navbar';
import Login from '../components/admin/Login';
import Logout from '../components/admin/Logout';
import Register from '../components/admin/Register';
import Forget from '../components/admin/Forget';
import Reset from '../components/admin/Reset';
import Profile from '../components/admin/Profile';
import axios from 'axios';
import AppURL from '../api/AppURL';
import AddServices from '../layouts/admin/AddServices';
import EditServices from '../layouts/admin/EditServices';
import ServicesList from '../layouts/admin/ServicesList';
// import AddServiceDetails from '../layouts/admin/AddServiceDetails';
import AddServiceDetailsNew from '../layouts/admin/AddServiceDetailsNew';


class AdminRouter extends Component {
  constructor(){
    super();
    this.state={
        user:{}
    }
}

componentDidMount(){
    axios.get(AppURL.UserData).then(response =>{
        this.setUser(response.data)
    }).catch(error => {
        console.log(error);
    })
}

setUser = (user) =>{
    this.setState({user:user})
}
  render() {
    return (
      <div>
        <>
        <Navbar />
        <Routes>
                <Route path='/admin' element={<MasterLayout user={this.state.user} setUser={this.setUser} />} />
                  <Route path='/admin/login' element={<Login user={this.state.user} setUser={this.setUser} />}/>
                  <Route path='/admin/logout' element={<Logout/>} />
                  <Route path='/admin/register' element={<Register user={this.state.user} setUser={this.setUser} />}/>
                  <Route path='/admin/forgot-password' element={<Forget />} />
                  <Route path='/admin/reset/:id' element={<Reset />} />
                  <Route path='/admin/profile' element={<Profile user={this.state.user} setUser={this.setUser}  key={Date.now()} />} />
                  <Route path="*" element={<div className='mt-5 text-center fs-1'>404 Not Found</div>} />

                  <Route path="/admin/addservices" element={<AddServices />} />
                  <Route path="/admin/editservices/:id/edit" element={<EditServices />} />
                  <Route path='/admin/serviceslist' element={<ServicesList />} />
                  <Route path='/admin/services/add-service-details' element={<AddServiceDetailsNew />} />
                  
                {/* /* Admin Router * */}
                
            
        
        </Routes>
        </>
      </div>
    )
  }
}

export default AdminRouter
