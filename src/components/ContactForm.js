import React from 'react';
import emailjs from 'emailjs-com';
import { Button } from './Buttons';

export default function ContactMe(){
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_560ugoe', e.target, 'user_wAFHIYSCu14kbrteHrOHz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    };

    return(
        <div>
            <div className="email-container">
                <form onSubmit={sendEmail}>
                    <div className="email-box">
                        <div className="email-labels">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="email-labels">
                        <   input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="email-labels">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="email-labels">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="email-labels">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="email-labels">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
