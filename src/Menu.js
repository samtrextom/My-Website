import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import Nav from 'react-bootstrap/Nav'

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <Nav.Link href="#About-Anchor">About</Nav.Link>
      <Nav.Link href="#Portfolio-Anchor">Portfolio</Nav.Link>
      <Nav.Link href="#Blog-Anchor">Blog</Nav.Link>
      <Nav.Link href="#Contact-Anchor">Contact</Nav.Link>  
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;