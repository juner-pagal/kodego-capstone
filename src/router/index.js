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
import Login from '../components/admin/Login';
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
        <Navbar />
        <Routes>
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
                <Route path='admin/login' element={<Login/>}/>
                <Route path="*" element={<div className='mt-5 text-center fs-1'>404 Not Found</div>} />
                
                

                {/* /* Admin Router * */}
                
            
        
        </Routes>
        
        
      </div>
    )
  }
}

export default MyRouter;
