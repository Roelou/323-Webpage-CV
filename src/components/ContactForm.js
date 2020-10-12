import React from 'react';
import emailjs from 'emailjs-com';


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
            <div className="email-container" style={{textAlign: 'center'}}>
                <form onSubmit={sendEmail}>
                    <div className="email-box" style={{paddingTop: '7em'}}>
                        <h1 style={{color: 'seashell', paddingBottom: '2em', color: 'gold'}}>PLEASE EMAIL ME</h1>
                        <div className="email-labels" style={{paddingBottom: '1em'}}>
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="email-labels" style={{paddingBottom: '1em'}}>
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="email-labels" style={{paddingBottom: '1em'}}>
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="email-labels" style={{paddingBottom: '1em'}}>
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="email-labels" style={{paddingBottom: '1em'}}>
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="email-labels" style={{paddingBottom: '1em'}}>
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
