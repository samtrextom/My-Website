import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import emailjs from 'emailjs-com'
import Config from './Config'


class ContactForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            message:""
        }
    }

    onNameChange(event){
        this.setState({name: event.target.value})
    }

    onEmailChange(event){
        this.setState({email: event.target.value})
    }

    onMessageChange(event){
        this.setState({message: event.target.value})
    }

    handleSubmit(event){

        console.log("Here: contact form 34")
        console.log("Name: "+this.state.name)
        console.log("Email: "+this.state.email)
        console.log("Message: "+this.state.message)

        emailjs.send(
            Config.emailService,
            Config.emailTemplate,
            {
                message: this.state.message,
                name: this.state.name,
                email: this.state.email
            },
            Config.emailToken).then(
            res=>{
                console.log("sent")
            }
        ).catch(err => console.error('failed: ', err))
    }

    render(){
        return(
            <div className="Contact-Form">
                <form onSubmit={this.handleSubmit.bind(this)}
                    method="POST" id="Email-Form">
                    <Container fluid="md">
                        <Row>
                            <Col>
                                <input 
                                    className="Contact-Form-Input-Name"
                                    placeholder="Your Name" 
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.onNameChange.bind(this)}>
                                </input>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input 
                                    className="Contact-Form-Input-Email"
                                    placeholder="Your Email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.onEmailChange.bind(this)}>
                                </input>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <textarea 
                                    className="Contact-Form-Input-TextArea"
                                    placeholder="What Do You Want Me To Know?"
                                    type="textarea"
                                    value={this.state.message}
                                    onChange={this.onMessageChange.bind(this)}>  
                                </textarea>
                            </Col>
                        </Row>
                        <Row>
                            <button type="submit" className="Submit-Button">Submit</button>
                        </Row>
                    </Container> 
                </form>       
            </div>
        )
    }  
}

export default ContactForm