import contactLetsConnect from '../assets/images/contact-lets-connect.png';
function Contact(){
    return(
        <div className="container-fluid mt-4 p-5">
            <h4 className="display-4">Let's Connect </h4>
            <div className='row'>
                <div className="col-md-6">
                    <p className="fs-5">
                        JJC Digital Agency is your catalyst for growth. If your current strategies feel constrained or your partner’s expertise seems capped, we’re here to push the boundaries. Contact us to elevate your social media program and drive sales growth.
                    </p>
                    <img src={contactLetsConnect} style={{width: "35rem", padding: "0px"}} alt="..." />
                </div>

                <div className='col-md-6'>
                    <form>
                        <label></label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;