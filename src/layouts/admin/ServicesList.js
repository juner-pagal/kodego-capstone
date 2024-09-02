import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';

const ServicesList = () => {
  const[services, setServices]= useState([]);
     
    useEffect( ()=>{
        const getServices= ()=>{
            fetch("http://127.0.0.1:8000/api/services")
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
                
                fetch("http://127.0.0.1:8000/api/services")
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
    
    <div className="container container_overflow">
        <div className="row">
            <div className="col-12">
                <h5 className="mb-4 display-5 text-center">Services List</h5> 
                <p className="text-danger"> </p>                 
                        <table className="table table-bordered">
                        <thead>
                        <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Services Name</th>
                        <th scope="col"> Caption</th>
                        <th scope="col"> Description</th>
                        <th scope="col">Product Image</th>
                        <th scope="col" width="200">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                services.map((pdata, index)=>(
                                    <tr key={index}>
                                    <td>{index+1 } </td>
                                    <td>{pdata.services_name } </td>
                                    <td>{pdata.services_caption } </td>
                                    <td>{pdata.services_desc } </td>
                                    {/* <td><img src={pdata.services_image} alt="" height={50} width={90} /></td> */}
                                    <td><img src={AppURL.ImageStorageURL+`${pdata.services_image}`} alt="" height={50} width={90} /></td>
                                    <td>
                                        <Link to={`/admin/editservices/${pdata.id}/edit`} className="btn btn-success mx-2">Edit</Link>
                                        <button onClick={() => deleteServices(pdata.id)} className="btn btn-danger">Delete</button>
                                        <ToastContainer/>
                                    </td>
                                    </tr>
                                ))
                            }
                        
                                                        
                        </tbody>
                        </table>  
            </div>
        </div>
    </div>
        
  )
}

export default ServicesList
