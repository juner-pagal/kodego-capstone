import contactLetsConnect from '../assets/images/contact-lets-connect.png';
const options = ["<$10,000","$10,000 - $50,000","$50,000 - $100,000","$100,000 - $250,000","$250,000 - $500,000","$500,000 - $750,000","$750,000+"];

function Contact(){
    return(
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
                    <form className='contact-form p-5'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>First Name *</label>
                                <input type="text" name='name' className='form-control' size='100' required />
                            </div>
                            <div className='col-md-6'>
                                <label>Last Name *</label>
                                <input type="text" name='name' className='form-control' required />
                            </div> 
                        </div>
                        <div className='mt-3'>
                            <label>Job Title *</label>
                            <input type="text" name='name' className='form-control' required />
                        </div>
                        <div className='mt-3'>
                            <label>Company Email Address *</label>
                            <input type="email" name='email' className='form-control' required />
                        </div>
                        <div className='mt-3'>
                            <label>Company Website *</label>
                            <input type="text" name='name' className='form-control' required />
                        </div>
                        <div className='mt-3'>
                            <label>Estimated Monthly Media Spend *</label>
                            
                            <select className='form-select' required>
                                <option disabled>Please Select</option>
                                {options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                                ))}
                            </select>
                        </div>
                        <div className='mt-3'>
                            <label>What Can We Help You With? *</label>
                            <textarea rows="4" cols="50" className='form-control' required></textarea>
                        </div>
                        <div className='mt-2'>
                            <p className='fst-italic p-4'>By checking [selecting “yes”] and submitting the form, you agree to receive communications from JJC Digital Agency.  For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please visit our Privacy Policy.</p>
                        </div>
                        <div className='text-center'>
                            <input type='submit' className='btn btn-primary' value="Submit" style={{padding: "10px 50px", borderRadius: "25px", border: "2px solid #ffc"}}/>
                        </div>          
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;