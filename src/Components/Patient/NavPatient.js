import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const linkStyle = {
    color:'#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingLeft: '3rem',
    textDecoration: 'none'
}
const outStyle = {
    color:'#ff0000',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingRight: '3rem',
}

function NavPatient({sendDataToParent}) {
    return(
        <div >
            <Navbar style={{backgroundColor:'#072227', paddingLeft:'4rem'}} expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand style={{color:'#3EDBF0', fontSize: '2rem', fontWeight: 'bold', paddingRight:'4rem'}}>Hello, Patient</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >

                    <Link to='/' style={linkStyle}>Home</Link>
                    <Link to='/prescriptionPatient' style={linkStyle}>Prescription</Link>
                
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


export default NavPatient;
