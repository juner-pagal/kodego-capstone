import aboutUs from '../assets/images/about-our-story.png';
import ourExpertise from '../assets/images/about-expertise.png';

import wedoStrategy from "../assets/images/wedo/wedo-strategy.png"; //subject for change
import wedoPaidMedia from "../assets/images/wedo/wedo-paidmedia.png"; //subject for change
import wedoInfluencerMarketing from "../assets/images/wedo/wedo-influencermarketing.png";//subject for change
import wedoData from "../assets/images/wedo/wedo-data.png";//subject for change


import React, { Component } from 'react'
import axios from 'axios';
import AppURL from '../api/AppURL';
import Values from '../components/Values';
import TeamMembers from '../components/TeamMembers';

class About extends Component {

    constructor(){
        super();
        this.state={
            data: [],       // State to store the fetched data
            loading: true,  // State to handle the loading state
            error: null,     // State to handle any errors
        }
    }
    componentDidMount(){

            axios.get(AppURL.AboutInfo).then(response =>{
                
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
        <>
        <div className='container'>
            {data.map((item, index) =>(
                <div key={index}>
                    {index % 2 ?
                    <div className='row'>
                        <div className='col-md-6 p-5'>
                            <p className="fs-4 fw-bold">{item.title}</p>
                            <p className="fs-5 text-justify">{item.desc}</p>
                        </div> 
                        <div className="col-md-6 text-center">
                            <img src={item.image} style={{width: "35rem", padding: "0px"}} alt={item.title}/>
                        </div>
                    </div> 
                : 
                    <div className='row'>
                        <div className="col-md-6 text-center">
                            <img src={item.image} style={{width: "35rem", padding: "0px"}} alt={item.title}/>
                        </div>
                        <div className='col-md-6 p-5'>
                            <p className="fs-4 fw-bold">{item.title}</p>
                            <p className="fs-5 text-justify">{item.desc}</p>
                        </div>
                    </div>}
                </div>
            ))}
        </div>
        <Values />
        
    <div className="container-fluid services-sub-desc mt-4">
    
        <div className="row">
            <h6 className="display-6 mt-5 mb-2 fw-bold text-center">Meet Our Team</h6>
            <TeamMembers />
            
        </div>
    </div>
    </>
    )
  }
}

export default About
