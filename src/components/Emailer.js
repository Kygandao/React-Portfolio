import React from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'
init('user_Yrmwh2Hc2tt6dspZ06Wm4')

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        'service_axkqu6e',
        'template_q3ltk8l',
        e.target, 
        'user_Yrmwh2Hc2tt6dspZ06Wm4'
        ).then(res => {
            console.log(res)
        })
        .catch(err => {console.log(err)});
}

const Emailer = () => {
    return (
        <div className='emailDiv'>
            <h2>Contact Me</h2>
            <form className='emailForm' onSubmit={sendEmail}>
                <label>Name</label>
                <input type='text' name='name'/>

                <label>Email</label>
                <input type='email' name='userEmail'/>

                <label>Message</label>
                <textarea name='userMessage' rows='4'/>

                <input type='submit' value='Send'/>
            </form>
            <div>
                Open to Work!
            </div>
        </div>
    )
}

export default Emailer
