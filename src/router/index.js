// import React from 'react';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Values from '../components/Values';
import Contact from '../pages/Contact';
import Strategy from '../pages/Strategy';
import Services from '../pages/Services';
import PaidMedia from '../pages/PaidMedia';
import InfluencerMarketing from '../pages/InfluencerMarketing';
import DataAI from '../pages/DataAI';
import InHousing from '../pages/InHousing';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Register from '../components/Register';
import Forget from '../components/Forget';
import Reset from '../components/Reset';
import Profile from '../components/Profile';
import AppURL from '../api/AppURL';



import React, { Component } from 'react'


class MyRouter extends Component {
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
        <Navbar user={this.state.user} setUser={this.setUser} />
        <Routes>
            <>
            
            
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/aboutvalues' element={<Values />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
                <Route path='/services/strategy' element={<Strategy />}/>
                <Route path='/services/paid-media' element={<PaidMedia />}/>
                <Route path='/services/influencer-marketing' element={<InfluencerMarketing/>}/>
                <Route path='/services/data-ai' element={<DataAI />} />
                <Route path='/services/in-housing' element={<InHousing />} />
                <Route path='/login' element={<Login user={this.state.user} setUser={this.setUser} />}/>
                <Route path='/logout' element={<Logout/>} />
                <Route path='/register' element={<Register user={this.state.user} setUser={this.setUser} />}/>
                <Route path='/forgot-password' element={<Forget />} />
                <Route path='/reset/:id' element={<Reset />} />
                <Route path='/profile' element={<Profile user={this.state.user} setUser={this.setUser}  key={Date.now()} />} />

                

                {/* Admin Router */}
                
            </>
        
        </Routes>
        
      </div>
    )
  }
}

export default MyRouter;
