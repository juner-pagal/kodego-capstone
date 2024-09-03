import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import AppURL from '../../api/AppURL';


const AddServiceDetails = () => {
    // const navigate = useNavigate();
     const [id, setId] = useState('');
     const [service, setService] = useState('');
    // const[servicesName, setServicesName]= useState('');
    const[subServices, setSubServices] = useState('');
    const[subServicesDesc, setSubServicesDesc]= useState('');

    // const[fileimage, setImage]= useState('');
    const[message, setMessage]= useState('');
 
    //Start of fetching Service List
    const[services, setServices]= useState([]);
    const [selectedServiceId, setSelectedServiceId] = useState(null);
    const[selectedServiceName, setSelectedServiceName] = useState(null);
     
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
    //End of fetching Service List
     //Get the ID Of Selected Service
     const handleSelectChange = (event) => {
        const selectedId = event.target.value;
        const selectedService = services.find(service => service.id === parseInt(selectedId))
        setSelectedServiceId(selectedId.id);
        setSelectedServiceName(selectedService.services_name);
        
      };

     //End of getting ID
    const addServicesSection1= async()=>{
        const formData= new FormData();
        formData.append('services_id', id)
        formData.append('services_name', service);
        formData.append('subservices', subServices)
        formData.append('services_desc',subServicesDesc);
        const responce= await axios.post(AppURL.ServicesAddSection1, formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );
 
        if(responce)
        {
            console.log(responce)
            setMessage(responce.message); //"message": "Services Section successfully created."
            toast.success(message);
            setTimeout(()=>{
                // navigate('/admin/serviceslist');
            }, 2000);
        }
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
    //   await addServicesSection1();
    alert(selectedServiceId+" "+selectedServiceName+" "+subServices+" "+subServicesDesc);
 
   }
  return (
    
        <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto mt-4">
                <h5 className="mb-4 display-5 text-center">Add Services Details </h5> 
                <p className="text-warning">{ message}</p>                              
                 
                    <form onSubmit={handleSubmit}>  
                    <fieldset className='border border-primary-subtle p-2 mb-3'>  
                        <legend className='bg-secondary px-1 m-1'>First Section</legend>         
                    <div className="mb-3 row">
                    <label  className="col-sm-3 mt-3">Select Service Name </label>
                    <div className="col-sm-9">
                        <select className='form-select mt-3 border border-primary-subtle'
                            name='servicesSelect'
                            id="serviceSelect"
                            onChange={handleSelectChange}
                            
                             
                        >
                           {services.map((serviceItem) => (
                            <option key={serviceItem.id} value={serviceItem.id} >{serviceItem.services_name}</option>
                           ))}
                        </select>
                    </div>
                    
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-3">Title </label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control border border-primary-subtle" onChange={(e)=>setSubServices(e.target.value)} required />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-3">Description </label>
                        <div className="col-sm-9">
                            <textarea className="form-control border border-primary-subtle" rows="6" onChange={(e)=>setSubServicesDesc(e.target.value)} required></textarea>
                        </div>
                    </div>
 
                    {/* <div className="mb-3 row">
                    <label  className="col-sm-3">Services Image</label>
                    <div className="col-sm-9">
                    <input type="file" className="form-control border border-primary-subtle" onChange={(e)=>setImage(e.target.files[0])} required />
                    </div>
                    </div> */}
 
                    <div className="mb-3 row">
                    <label className="col-sm-3"></label>
                    <div className="col-sm-9">
                    <button type="submit" className="btn btn-success">Submit</button>
                    <ToastContainer/>
                    </div>
                    </div>
                    </fieldset>
                    </form>
 
             </div>
            </div>
        </div>
    
  )
}

export default AddServiceDetails;
