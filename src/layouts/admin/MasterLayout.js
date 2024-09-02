import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';

const MasterLayout = () => {
  const[services, setServices]= useState([]);
     
    useEffect( ()=>{
        const getServices= ()=>{
            fetch(AppURL.AddServices)
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.services)
                setServices(response.services)
            })
            .catch(error=>{ console.log(error)});
        }
        getServices();
    },[]);
  
   
    const deleteServices = (id) => {
        axios.delete(AppURL.DeleteServices+id).then(function(response){
            console.log(response.data);
            if(response.status == 200){
              toast.success("Record Successfully Deleted")
              
              setTimeout(()=>{
                
                fetch(AppURL.AddServices)
              .then(res=>{ return res.json()})
              .then(response=>{ 
                console.log(response.services)
                setServices(response.services)
            })

            }, 4000);
              
            }
            // alert("Successfully Deleted");
        });
        
    }
  return (
  <>
    

    <div className="card-image-bg">
            <div className="container-fluid">
                <div className="row">
                {services.map((item, index) => (
                    <>
                        <div key={index} className="col-md-6 services-holder mt-5 mb-5 p-5">
                        <h6 className="display-6 mt-5">{item.services_name}</h6>
                        <h5 className="display-5 fw-bolder mt-4">{item.services_caption}</h5>
                        <p className="fs-5 mt-4">{item.services_desc}</p>
                        <Link to="/admin/serviceslist"><button className="btn btn-primary mt-4 mb-4" >MANAGE</button></Link>
                    </div> 
                    <div className="col-md-6 text-center">
                    <img src={AppURL.ImageStorageURL+`${item.services_image}`} style={{width: "35rem", padding: "0px"}} alt="..."/>
                    </div>  
                    </>
                ))}     
                </div>
            </div>
        </div>

</>
        
  )
}

export default MasterLayout
