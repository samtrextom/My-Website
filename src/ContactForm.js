import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function ContactForm(){
    return(
        <div className="Contact-Form">
            <Container fluid="md">
                <Row>
                    <Col>
                        <div>
                            
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input 
                            className="Contact-Form-Input-Name"
                            placeholder="Your Name" 
                            type="text">
                        </input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input 
                            className="Contact-Form-Input-Email"
                            placeholder="Your Email"
                            type="email">
                        </input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <textarea 
                            className="Contact-Form-Input-TextArea"
                            placeholder="What Do You Want Me To Know?"
                            type="textarea">  
                        </textarea>
                    </Col>
                </Row>
                <Row>
                    <button className="Submit-Button">Submit</button>
                </Row>
            </Container>           
        </div>
    )
}

export default ContactForm