import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar(){
    return(
        <div>
            <Navbar style={{padding:"0px"}} variant="standard-color" sticky="top">
                <Navbar.Brand style={{padding:"0px"}} href="#home">
                <img
                    alt=""
                    src="/dragonsamtomwhite.svg"
                    width="250"
                    height="70"
                    className="d-inline-block align-top"
                />{' '}
                </Navbar.Brand>
                <Nav className="Nav">
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Portfolio</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar