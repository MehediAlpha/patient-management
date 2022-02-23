import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './CSS/loginPatient.css';

import HomepagePatient from './HomepagePatient'


function LoginAdmin({sendDataToParent}) {

  const[signedIn, setSignedIn] = React.useState(false)

  const handleLogin = () => {
    setSignedIn(true)
  }

  if(signedIn){

    return(
      <HomepagePatient sendDataToParent = {sendDataToParent}/>
    )

  } else{

    return(
      <div>
        <div className='loginPatient'>
         <Card style={{ width: '50rem', backgroundColor: '#072227', borderWidth: '2px', borderColor: '#072227'}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <h1 className='header'>Login as Patient</h1>
              <input className='inputBox' type="text" placeholder="Username" autoFocus="1"/><br/>
              <input className='inputBox' type="password" placeholder="Password" autoFocus="1"/><br/>
              <Button style={{backgroundColor:'#ff5300', borderColor: '#ff5300', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem' }} onClick={handleLogin}>
                Login
              </Button>
            </Card.Body>
          </Card>
        </div>
        <Button as={Col} onClick={()=>{sendDataToParent('home');}} variant="danger">go back</Button>
      </div>
    )

  }

}


export default LoginAdmin;
