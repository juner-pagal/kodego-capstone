
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";

const EditServices = () => {
  const navigate = useNavigate();
     
    const {id}=   useParams();
     
    const[message, setMessage]= useState('');
 
    const [inputs, setInputs] = useState([]);
    const [fileimage, setImage]= useState('');
     
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
     
    const uploadServices= async()=>{
        const formData= new FormData();
        formData.append('_method', 'PUT');
        formData.append('services_name', inputs.services_name);
        formData.append('services_caption',inputs.services_caption);
        formData.append('services_desc',inputs.services_desc );
        formData.append('services_image', fileimage);
        const response= await axios.post(AppURL.EditServices+id, formData, {
            headers:{'Content-Type':"multipart/form-data"},

            
        } );
        setMessage(response.data.message); //"message": "Product successfully updated.."
        console.log(response)
        if(response.status == 200){
          toast.success("Services successfullly updated");
        }
        

        setTimeout(()=>{
            navigate('/admin/serviceslist');
        }, 3000);
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadServices();
 
   }
    
    useEffect(() => {
        getServices();
    }, []);
   
    function getServices() {
        axios.get(AppURL.DisplayServicesOnEdit+id).then(function(response) {
            console.log(response);
            setInputs(response.data.services);
        });
    }
     
    return(
    <React.Fragment>
        <div className="container">
            <div className="row">
              <div className="col-md-8 mt-4">
                <h5 className="mb-4">Edit Services </h5> 
                <p className="text-success"><b>{ message }</b></p>                              
                 
                    <form onSubmit={ handleSubmit}>             
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Services Name </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.services_name} className="form-control" name="services_name" onChange={ handleChange} required/>
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label  className="col-sm-3">Services Caption </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.services_caption} className="form-control" name="services_caption" onChange={ handleChange} required/>
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Description </label>
                    <div className="col-sm-9">
                        <textarea value={inputs.services_desc} className="form-control" name="services_desc" onChange={ handleChange} rows="5" required></textarea>
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Services Image</label>
                    <div className="col-sm-9">
                        <img src={AppURL.picStorage+`${inputs.services_image}`} alt="" height={300} width={300}  />
                        <input type="file" className="form-control mt-2" onChange={(e)=>setImage(e.target.files[0])} required/>
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label className="col-sm-3"></label>
                    <div className="col-sm-9">
                    <button type="submit" className="btn btn-success">Confirm Update</button>
                    <ToastContainer/>
                    </div>
                    </div>
 
                    </form>
 
             </div>
            </div>
        </div>
    </React.Fragment>
    );
}

export default EditServices
