import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";
import MyRouter from "./router/index";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, Routes, Navigate } from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout";
import Profile from "./components/admin/Profile";
import Dashboard from "./components/admin/Dashboard";
import AdminRouter from "./router/AdminRouter";





function App() {
        let defaultPage;
        
        if(!localStorage.getItem('token')){
            defaultPage = (
              <>
                <MyRouter />
                <Footer />
                {/* <Navigate to="/" /> */}
              </>
            )
            
        }else{
          defaultPage = (
            <AdminRouter />
        )
        }
  return (
      <div>
        {defaultPage}
        {/* <MyRouter />
        <Footer />  */}
        
          {/* <AdminRouter /> */}

        {/* <Router>
          
        </Router>

        
          <Routes>
            <Route path="/admin/*" name="Admin" element={<MasterLayout />} >
              <Route path="profile" element={<Profile />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
              
            {/* <Route path="*" element={<NotFoundPage />} /> Fallback for 404 */}
          {/* </Routes> */}
        
      </div>
  )
}

export default App;
