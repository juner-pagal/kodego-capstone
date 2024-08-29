import React, { Component } from 'react'
import axios from 'axios';
import AppURL from '../api/AppURL';

class Values extends Component {

    constructor(){
        super();
        this.state={
            data: [],       // State to store the fetched data
            loading: true,  // State to handle the loading state
            error: null,     // State to handle any errors
        }
    }
    componentDidMount(){
        axios.get(AppURL.AboutValues).then(response =>{
            this.setState({
                data: response.data,
                loading: false
            });
            

        }).catch(error=>{
            this.setState({
                error:error,
                loading:false
            })
        })

    }

  render() {
    const { data, loading, error } = this.state;
    if (loading) return <p>Loading...</p>;  // Render loading state
    if (error) return <p>Error: {error.message}</p>;  // Render error state if there's an error

    return (
      <div>
        <div className="container">
        <div className='row'>
        <h3 className="display-5 mt-5 fw-bold text-center">Our Values</h3>
            <div className="container mt-5">
                <div className="row">
                    {data.map(item => (
                    
                        <div className="card mx-auto mt-3" style={{width: "35rem", padding: "0px"}}>
                            <div className="h-100">
                                <img src={item.image} className="card-img-top card-image-bg" alt={item.title} style={{margin: "0px 0px"}}/>
                                <div className="card-body">
                                    <p className="card-title fw-bolder fs-3">{item.title}</p>
                                    <p className="card-text fs-5">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    
                    ))}      
                </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Values
