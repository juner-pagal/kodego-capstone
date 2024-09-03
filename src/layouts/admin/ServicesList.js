import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';

const ServicesList = () => {
  const[services, setServices]= useState([]);
  const[selectedService, setSelectedService] = useState(null);
     
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
  
    const handleDeleteClick = (service) => {
        setSelectedService(service);
        // alert(selectedService);
    }
   
    const deleteServices = (id) => {
        axios.delete(AppURL.DeleteServices+id).then(function(response){
            console.log(response.data);
            if(response.status === 200){
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
                                        {/* <button onClick={() => deleteServices(pdata.id)} className="btn btn-danger" >Delete</button> */}
                                        <button onClick={() => handleDeleteClick(pdata)} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" >Delete</button>
                                        <ToastContainer/>
                                        
                                        <div class="modal fade"  id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="deleteModalLabel">Delete Confirmation</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                Are you sure to delete {' '}{selectedService ? selectedService.services_name : " "} ?
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                <button onClick={() => selectedService & deleteServices(selectedService.id)}  type="button" class="btn btn-primary" data-bs-dismiss="modal">Confirm Delete</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
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
