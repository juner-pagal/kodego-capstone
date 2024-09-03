import React, { Component } from 'react';
import axios from 'axios';
import AppURL from '../api/AppURL';

class WhatWeDo extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get(AppURL.WhatWeDo).then(response => {
            this.setState({
                data:response.data
            });
        }).catch(error =>{

        })
    }
  render() {
    const {data} = this.state;
    return (
        <div className="container mt-5">
            <div className="row">
                {data.map((item,index) => ( 
                    <div key={index} className="card mx-auto mt-3" style={{width: "35rem", padding: "0px"}}>
                    <div className="h-100">
                        <img src={item.image} className="card-img-top card-image-bg" alt="..." style={{margin: "0px 0px"}}/>
                        <div className="card-body">
                            <h5 className="card-title fw-bolder display-6">{item.title}</h5>
                            <p className="card-text fs-5">{item.desc}</p>
                        </div>
                    </div>
                </div>
                ))
                }  
            </div>
         </div>
    )
  }
}

export default WhatWeDo
