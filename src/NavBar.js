import React, {useState}from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Burger from './Burger'
import Menu from './Menu'
import { theme } from './theme'
import {ThemeProvider} from 'styled-components'

function NavBar(){

    const [open, setOpen] = useState(false);

    return(
            <ThemeProvider theme={theme}>
                <Navbar style={{padding:"0px"}} variant="standard-color" sticky="top">
                    <Navbar.Brand style={{padding:"0px"}} href="#Main-Anchor">
                    <img
                        alt=""
                        src="/dragonsamtomwhite.svg"
                        width="250"
                        height="70"
                        className="d-inline-block align-top"
                    />{' '}
                    </Navbar.Brand>
                    <Burger open={open} setOpen={setOpen}/>
                    <Nav className="Nav Desktop-Nav">
                        <Nav.Link href="#About-Anchor">About</Nav.Link>
                        <Nav.Link href="#Portfolio-Anchor">Portfolio</Nav.Link>
                        <Nav.Link href="#Blog-Anchor">Blog</Nav.Link>
                        <Nav.Link href="#Contact-Anchor">Contact</Nav.Link>                    
                    </Nav>                
                </Navbar>
                <Menu open={open} setOpen={setOpen}/>
            </ThemeProvider>
    )
}

export default NavBar