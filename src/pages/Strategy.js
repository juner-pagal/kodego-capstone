import AppURL from "../api/AppURL";
import servicesStrategy from "../assets/images/services/services-strategy.png"
import MarqueeSection from "../components/MarqueeSection";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

import React, { Component } from 'react'

class Strategy extends Component {
    constructor(){
        super();
        this.state={
            data: [],
            data2: [],
            data3: []       // State to store the fetched data
            
        }
    }
    componentDidMount(){
        axios.get(AppURL.Strategy).then(response =>{
            this.setState({
                data: response.data,
            });
            // console.log(response.data);
        }).catch(error=>{
            if(error){
                return "Something went wrong";
            }
        })
    // get the second level data
        axios.get(AppURL.StrategySub).then(response =>{
            this.setState({
                data2: response.data,
            });
            // console.log(response.data);
        }).catch(error=>{
            if(error){
                return "Something went wrong";
            }
        })
        // get the third level data
        axios.get(AppURL.StrategyDetails).then(response =>{
            this.setState({
                data3: response.data,
            });
            // console.log(response.data);
        }).catch(error=>{
            if(error){
                return "Something went wrong";
            }
        })

        
    }

  render() {
    const { data } = this.state;
    const { data2 } = this.state;
    const { data3 } = this.state;
    
    
    
    return (
        <>
        <div className="card-image-bg">
            <div className="container-fluid">
                <div className="row">
                {data.map((item, index) => (
                    <>
                        <div key={index} className="col-md-6 services-holder mt-5 mb-5 p-5">
                        <h6 className="display-6 mt-5">{item.services_name}</h6>
                        <h5 className="display-5 fw-bolder mt-4">{item.services_caption}</h5>
                        <p className="fs-5 mt-4">{item.services_desc}</p>
                        <Link to="/contact"><button className="btn btn-primary mt-4 mb-4" >GET STARTED</button></Link>
                    </div> 
                    <div className="col-md-6 text-center">
                    <img src={AppURL.ImageStorageURL+`${item.services_image}`} style={{width: "35rem", padding: "0px"}} alt="..."/>
                    </div>  
                    </>
                ))}
                    
                </div>
            </div>
        </div>
        <h4 className="display-4 mt-5 mb-4 text-center fw-bolder">What’s in it for you</h4>
            <div className="container-fluid p-5">
                {data2.map((item,index) => (
                    <>
                    <div key={index} className="row align-items-center mb-5 whats-in">
                        <div className="col-md-4 p-4 services-sub">
                            <p className="fs-3 text-center align-items-center">{item.subservices}</p>
                        </div>
                        <div className="col-md-8 p-4 services-sub-desc shadow">
                            <p className="px-4 py-4 fs-5">{item.subservices_desc}</p>
                        </div>
                    </div>
                    </>
                ))}
                
                <div className="text-center">
                <Link to="/contact"><button className="get-in-touch fs-4" type="button">GET IN TOUCH</button></Link>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <h6 className="display-6 mt-4 mb-5 fw-bold text-center">Clients We Have Helped Grow</h6>
                    <MarqueeSection />
                </div>
            </div>
            <div className="container">
                <div className="row">
                {data3.slice(0, 1).map((item) => (
                    <div key={item.id}>
                        <h4 className="display-3 mt-4 mb-5 fw-bold text-center">{item.servicesdetails_title}</h4>
                    </div>
                ))}
                    
                </div>
            </div>
            
            <div className='container'>
            {data3.map((item, index) =>(
                <div key={index}>
                    {index % 2 ?
                    <div className='row'>
                        <div className='col-md-6 p-5'>
                            <p className="fs-4 fw-bold">{item.subservicesdetails_name}</p>
                            <p className="fs-5 text-justify">{item.subservicesdetails_desc}</p>
                        </div> 
                        <div className="col-md-6 text-center">
                            <img src={item.subservicesdetails_image} style={{width: "35rem", padding: "0px"}} alt={item.title}/>
                        </div>
                    </div> 
                : 
                    <div className='row'>
                        <div className="col-md-6 text-center">
                            <img src={item.subservicesdetails_image} style={{width: "35rem", padding: "0px"}} alt={item.title}/>
                        </div>
                        <div className='col-md-6 p-5'>
                            <p className="fs-4 fw-bold">{item.subservicesdetails_name}</p>
                            <p className="fs-5 text-justify">{item.subservicesdetails_desc}</p>
                        </div>
                    </div>}
                </div>
            ))}
        </div>
                
        </>
    )
  }
}

export default Strategy
