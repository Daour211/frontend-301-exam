import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/favorite">FavoriteDigimons</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Header;
