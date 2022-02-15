import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const linkStyle = {
    color:'#000',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingLeft: '3rem',
    textDecoration: 'none'
}
const outStyle = {
    color:'#ffff00',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingRight: '3rem',
}

function NavAdmin({sendDataToParent}) {
    return(
        <div >
            <Navbar style={{backgroundColor:'#ff5300', paddingLeft:'4rem'}} expand="lg">
            <Container fluid>
                <Navbar.Brand style={{color:'#fff', fontSize: '2rem', fontWeight: 'bold', paddingRight:'4rem'}}>Hello, Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >

                    <Link to='/' style={linkStyle}>Home</Link>
                    <Link to='/doctorAdmin' style={linkStyle}>Doctor</Link>
                    <Link to='/patientAdmin' style={linkStyle}>Patient</Link>
                    <Link to='/appointmentAdmin' style={linkStyle} >Appointment</Link>
                </Nav>
                <Nav className="justify-content-end" style={{ maxHeight: '100px' }} navbarScroll >
                    <Nav.Link style={outStyle} onClick={()=>{sendDataToParent('home');}}>Sign Out</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}


export default NavAdmin;
