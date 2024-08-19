import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Strategy from '../pages/Strategy';
// import StudentList from '../pages/Student';
import Services from '../pages/Services';
import PaidMedia from '../pages/PaidMedia';
import InfluencerMarketing from '../pages/InfluencerMarketing';
import DataAI from '../pages/DataAI';
import InHousing from '../pages/InHousing';

function MyRouter(){

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/services/strategy' element={<Strategy />}/>
            <Route path='/services/paid-media' element={<PaidMedia />}/>
            <Route path='/services/influencer-marketing' element={<InfluencerMarketing/>}/>
            <Route path='/services/data-ai' element={<DataAI />} />
            <Route path='/services/in-housing' element={<InHousing />} />
        </Routes>
    )
}

export default MyRouter;