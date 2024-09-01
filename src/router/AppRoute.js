import React, { Component } from 'react'
import AppURL from '../api/AppURL';
import axios from 'axios';

class AppRoute extends Component {

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
        
      </div>
    )
  }
}

export default AppRoute
