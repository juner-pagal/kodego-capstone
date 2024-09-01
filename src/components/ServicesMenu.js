import axios from 'axios';
import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import AppURL from '../api/AppURL';

class ServicesMenu extends Component {

    constructor(){
        super();
        this.state={
            ServicesData:[]
        }
    }
    componentDidMount(){
        axios.get(AppURL.AllServices).then(response =>{
            this.setState({ServicesData:response.data});
            
        }).catch(error => {

        });
    }


  render() {
    const {ServicesData} = this.state;
    return (
      <Fragment>
        {/* <Navbar data={ServicesData} /> */}

     </Fragment>
    )
  }
}

export default ServicesMenu
