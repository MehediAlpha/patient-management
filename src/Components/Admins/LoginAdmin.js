import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './admin.css'


function LoginAdmin() {
  return(
    <div className='loginAdmin'>
      <div>
       <Card style={{ width: '50rem', backgroundColor: '#ff2200'}}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <h1 className='header'>Login as Admin</h1>
            <input className='inputBox' type="text" placeholder="Username" autofocus="1"/><br/>
            <input className='inputBox' type="password" placeholder="Password" autofocus="1"/><br/>
            <Button style={{backgroundColor:'#000', borderColor: '#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem' }}>Login</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}


export default LoginAdmin;
