import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
// import StudentList from '../pages/Student';
import Services from '../pages/Services';

function MyRouter(){

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
        </Routes>
    )
}

export default MyRouter;