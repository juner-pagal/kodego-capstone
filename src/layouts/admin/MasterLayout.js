import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
// import routes from '../../router/routes';
import Profile from '../../components/admin/Profile';


const MasterLayout = (user, setUser) => {
    
  return (
        <>
                        
        <h1>This is Master Layout</h1>
                    
                
         </>

  )
}

export default MasterLayout
