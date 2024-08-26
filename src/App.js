import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";
import MyRouter from "./router/index";

import Footer from "./components/Footer";



function App() {


  return (
      <div>
        
        <MyRouter />
        <Footer />
        
      </div>
  )
}

export default App;
