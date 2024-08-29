import contactLetsConnect from '../assets/images/contact-lets-connect.png';

import React, { Component } from 'react';
import axios from 'axios';
import AppURL from '../api/AppURL';
import validation from '../validation/validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class Contact extends Component {
    
    constructor(){
        super();
        this.state={
            name:"",
            jobtitle:"",
            email:"",
            website:"",
            mediaspend:"",
            message:"",
            ischecked:false,
        }
    }

        nameOnChange = (event) => {
            let name = event.target.value;
            this.setState({name:name})
        }
        jobtitleOnChange = (event) => {
            let jobtitle = event.target.value;
            this.setState({jobtitle:jobtitle})
        }
        emailOnChange = (event) => {
            let email = event.target.value;
            this.setState({email:email})
        }
        websiteOnChange = (event) => {
            let website = event.target.value;
            this.setState({website:website})
        }
        mediaspendOnChange = (event) => {
            let mediaspend = event.target.value;
            this.setState({mediaspend:mediaspend})
        }
        messageOnChange = (event) => {
            let message = event.target.value;
            this.setState({message:message})
        }
        handleCheckboxChange = (event) => {
            let ischecked = event.target.checked;
            this.setState({ischecked:ischecked})
            // alert(ischecked);
        }
        

        onFormSubmit = (event) => {
            let btnSend = document.getElementById("btnSend");
            let name = this.state.name;
            let jobtitle = this.state.jobtitle;
            let email = this.state.email;
            let website = this.state.website;
            let mediaspend = this.state.mediaspend;
            let message = this.state.message;
            let subscription = this.state.ischecked;
            let contactForm = document.getElementById("contactForm");

                if(message.length===0){
                    toast.error("Please write your message");
                }else if(name.length===0){
                    toast.error("Please enter your name");
                }else if(email.length===0){
                    toast.error("Please enter your email");
                }else if(!(validation.NameRegx).test(name)){
                    toast.error("Invalid Name");
                }else{
                    btnSend.innerHTML="Sending...";
                    let myFormData = new FormData();
                    myFormData.append("name",name)
                    myFormData.append("jobtitle",jobtitle)
                    myFormData.append("email",email)
                    myFormData.append("website",website)
                    myFormData.append("mediaspend",mediaspend)
                    myFormData.append("message",message)
                    myFormData.append("subscription",subscription)

                    axios.post(AppURL.PostContact,myFormData)
                        .then(function (response){
                            if(response.status==200 && response.data==1){
                                toast.success("Message sent successfully");
                                btnSend.innerHTML="SEND MESSAGE";
                                contactForm.reset();
                            }else{
                                toast.error("error");
                                btnSend.innerHTML="SEND MESSAGE";
                            }
                        })
                        .catch(function (error){
                            toast.error(error);
                            btnSend.innerHTML="SEND MESSAGE";
                        });
                }
            event.preventDefault();
        }

  render() {
    const options = ["<$10,000","$10,000 - $50,000","$50,000 - $100,000","$100,000 - $250,000","$250,000 - $500,000","$500,000 - $750,000","$750,000+"];
    return (
        <div className="container-fluid mt-1 p-5">
        <h4 className="display-4 text-center mb-5 fw-bolder">Let's Connect </h4>
        <div className='row'>
            <div className="col-md-6">
                <p className="fs-5">
                    JJC Digital Agency is your catalyst for growth. If your current strategies feel constrained or your partner’s expertise seems capped, we’re here to push the boundaries. Contact us to elevate your social media program and drive sales growth.
                </p>
                <img src={contactLetsConnect} style={{width: "35rem", padding: "0px"}} alt="..." />
            </div>

            <div className='col-md-6'>
                <form id="contactForm" onSubmit={this.onFormSubmit} className='contact-form p-5'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <label>Name *</label>
                            <input onChange={this.nameOnChange} type="text" name='name' className='form-control' size='100' required />
                        </div> 
                    </div>
                    <div className='mt-3'>
                        <label>Job Title *</label>
                        <input onChange={this.jobtitleOnChange} type="text" name='jobtitle' className='form-control' required />
                    </div>
                    <div className='mt-3'>
                        <label>Company Email Address *</label>
                        <input onChange={this.emailOnChange} type="email" name='email' className='form-control' required />
                    </div>
                    <div className='mt-3'>
                        <label>Company Website *</label>
                        <input onChange={this.websiteOnChange} type='url' name='website' className='form-control' placeholder='http://companyname.com' required />
                    </div>
                    <div className='mt-3'>
                        <label>Estimated Monthly Media Spend *</label>
                        
                        <select onChange={this.mediaspendOnChange} className='form-select' name='mediaspend' required>
                            <option>Please Select</option>
                            {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className='mt-3'>
                        <label>What Can We Help You With? *</label>
                        <textarea onChange={this.messageOnChange} rows="4" cols="50" name='message' className='form-control' placeholder='Message' required></textarea>
                    </div>
                    <div className='mt-2'>
                        <p className='fst-italic py-1'>By checking [selecting “yes”] and submitting the form, you agree to receive communications from JJC Digital Agency.  For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please visit our Privacy Policy.</p>
                        <input onChange={this.handleCheckboxChange} type='checkbox'checked={this.state.ischecked} className='form-check-input border border-primary' id='subscribe'/> <label className='fs-6 d-inline' htmlFor="subscribe">Sign me up for JJC's Newsletter to stay in-the-know on all things paid digital.</label>
                        
                        {/* <p>{this.state.ischecked ? 'You choose to Subscribe Newsletter' : 'vcb'}</p> */}
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn btn-primary' id='btnSend' style={{padding: "10px 50px", borderRadius: "25px", border: "2px solid #ffc"}}>SEND MESSAGE</button>
                            <ToastContainer/>
                    </div>          
                </form> 
            </div>
        </div>
    </div>
    )
  }
}

export default Contact;
