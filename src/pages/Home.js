import AppURL from "../api/AppURL";
import Main from "../components/Main";
import axios from "axios";


import React, { Component } from 'react'

class Home extends Component {
    GetVisitorDetails = () => {
        axios.get(AppURL.VisitorDetails)
        .then()
        .catch()
    }

    componentDidMount(){
        this.GetVisitorDetails();
    }
  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

export default Home
