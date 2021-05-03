import React from 'react';
import emailjs from 'emailjs-com';
import './email.css';

const Email = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_o11fch8', 'template_l5dfw98', e.target, 'user_On8AyZPcPQaE41MmKiM5n')
            .then((result) => {
                alert('submit Successful',result);
                window.location.reload();
            }, (error) => {
               
            });
    }
    return (
        <div className="container">
            <div className=" col-md-12 form_style">
            <h1 className="font-size"> Get In Touch</h1>
            <form class="row g-1" onSubmit={sendEmail} >
                <div class=" mb-3 ">
                    <label for="validationServer01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationServer01"  required />
                </div>
                <div class="mb-3">
                        <label for="validationServer02" class="form-label">Subject</label>
                        <input type="text" class="form-control" id="validationServer02" required />
                    </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-success button" type="submit">Send Your message</button>
                    </div>
            </form>
            </div>
        </div>
        // {/* <form className="contact-form" onSubmit={sendEmail}>
        //         <input type="hidden" name="contact_number" />
        //         <label>Name</label>
        //         <input type="text" name="user_name" />
        //         <label>Email</label>
        //         <input type="email" name="user_email" />
        //         <label>Message</label>
        //         <textarea name="message" />
        //         <input type="submit" value="Send" />
        //     </form> */}
    );
};

export default Email;