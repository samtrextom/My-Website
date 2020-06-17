import React from 'react'
import ContactFooter from './ContactFooter'
import ContactForm from './ContactForm'

function Contact(){
    return(
        <div className="Contact">
            <div className="Section-Header">Contact</div>
            <div className="Contact-Form-Description">
                <div>Want to make something incredible together?</div>
                <div></div>
            </div>            
            <ContactForm></ContactForm>
            <ContactFooter></ContactFooter>
        </div>
    )
}

export default Contact