import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const linkStyle = {
    color:'#ff5300',
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

function NavDoctor({sendDataToParent}) {
    return(
        <div >
            <Navbar style={{backgroundColor:'#d1d1d1', paddingLeft:'4rem'}} expand="lg">
            <Container fluid>
                <Navbar.Brand style={{color:'#000', fontSize: '2rem', fontWeight: 'bold', paddingRight:'4rem'}}>Hello, Doc</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >

                    <Link to='/' style={linkStyle}>Home</Link>
                    <Link to='/patientDoctor' style={linkStyle}>Patient</Link>
                
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


export default NavDoctor;
