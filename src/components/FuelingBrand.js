import axios from 'axios';
import React, { Component } from 'react'
import AppURL from '../api/AppURL';

class FuelingBrand extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get(AppURL.FuelingBrand).then(response => {
            this.setState({
                data:response.data
            });
        }).catch(error =>{

        })
    }
  render() {
    const {data} = this.state;
    return (
      <div className='container-fluid'>
        <div className="row fueling-content mt-5">
            {data.map((item,index)=>
                <div key={index} className="col-md-4 px-4">
                <h6 className="display-6 fw-bold">{item.title}</h6>
                <p className="fw-semibold">{item.desc}</p>
            </div>
            )}
        </div>
      </div>
    )
  }
}

export default FuelingBrand
