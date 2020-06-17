import React from 'react'
import SocialLink from './SocialLink'
import ContactButton from './ContactButton'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function ContactFooter(){
    return(
        <div className="Contact-Footer">
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="19.5vh" width="100vw">
                <path d="M 0,100 50,0 100,100 Z" fill="#383838"></path>
            </svg>
            <div className="Footer">
            <ContactButton/>
                <div className="Social-Container">
                    <Container>
                        <Row>
                            <Col>
                                <SocialLink/>
                            </Col>
                            <Col>
                                <SocialLink/>
                            </Col>
                            <Col>
                                <SocialLink/>
                            </Col>
                            <Col>
                                <SocialLink/>
                            </Col>
                            <Col>
                                <SocialLink/>
                            </Col>
                        </Row>                    
                    </Container>
                </div>                
            </div>
            <div className="Copy-Right">
                <div className="Name-Div">
                    Sam Tom &nbsp;
                    <span className="Copy-Right-Span">
                        &copy;2020
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ContactFooter