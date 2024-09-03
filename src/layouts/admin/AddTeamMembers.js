import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import AppURL from '../../api/AppURL';


const AddTeamMembers = () => {
    const navigate = useNavigate();
    
    const[fileimage, setImage]= useState('');
    const[txtname, setName]= useState('');
    const[txtposition, setCaption] = useState('');
    const[txtdescription, setDescription]= useState('');
    const[message, setMessage]= useState('');
 
    const uploadServices= async()=>{
        console.log(fileimage)
        const formData= new FormData();
        formData.append('image', fileimage);
        formData.append('name', txtname);
        formData.append('position', txtposition)
        formData.append('desc',txtdescription);
        
        const responce= await axios.post(AppURL.AddServices, formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );
 
        if(responce)
        {
            console.log(responce)
            setMessage(responce.message); //"message": "Product successfully created."
            setTimeout(()=>{
                navigate('/admin/serviceslist');
            }, 2000);
        }
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadServices();
 
   }
  return (
    
        <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto mt-4">
                <h5 className="mb-4 display-5 text-center">Add Services </h5> 
                <p className="text-warning">{ message}</p>                              
                 
                    <form onSubmit={handleSubmit}>             
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Services Name </label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control border border-primary-subtle" onChange={ (e)=>setName(e.target.value)} required/>
                    </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-3">Caption </label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control border border-primary-subtle" onChange={(e)=>setCaption(e.target.value)} required />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-3">Description </label>
                        <div className="col-sm-9">
                            <textarea className="form-control border border-primary-subtle" rows="6" onChange={(e)=>setDescription(e.target.value)} required></textarea>
                        </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Services Image</label>
                    <div className="col-sm-9">
                    <input type="file" className="form-control border border-primary-subtle" onChange={(e)=>setImage(e.target.files[0])} required />
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label className="col-sm-3"></label>
                    <div className="col-sm-9">
                    <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                    </div>
 
                    </form>
 
             </div>
            </div>
        </div>
    
  )
}

export default AddTeamMembers;
