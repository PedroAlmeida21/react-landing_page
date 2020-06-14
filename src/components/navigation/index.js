import React from 'react';
import './navigation.scss';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


function Navigation(){
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <div className="container">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                            <Nav.Link href="/contact-me">Contact Me</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
}

export default Navigation