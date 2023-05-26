import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navibar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='fixed-top'>
        <Container>
          <Navbar.Brand href="/">My App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/product">Product List</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Navibar
