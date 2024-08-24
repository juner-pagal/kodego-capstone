import React from "react";
import { Link } from "react-router-dom";
import MyRouter from "./router/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <Navbar />
        <MyRouter />
        <Footer />
      </div>
  )
}

export default App;
