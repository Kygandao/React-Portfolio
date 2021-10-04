import React from 'react'
import Emailer from './Emailer'

const ContactPage = () => {
    return (
        <div className='contactDiv'>
            <div className='emptyDiv'>
                
            </div>
            
            <div className='contactBody'>
                <h2>Contact Me</h2>
                <p>
                If you are interested in the work that I have done, have any questions about my work, or would like to work
                together on a different project, feel free to reach out to me!
                </p>
            </div>
            <div className='contactFormDiv'>
                <Emailer/>
            </div>
            
        </div>
    )
}

export default ContactPage
