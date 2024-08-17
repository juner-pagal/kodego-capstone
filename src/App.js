import React from "react";
import { Link } from "react-router-dom";
import MyRouter from "./router/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link> */}
        <Navbar />
        <MyRouter />
        <Footer />
      </div>
  )
}

export default App;
