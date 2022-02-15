import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './CSS/loginAdmin.css';

import HomepageAdmin from './HomepageAdmin';


function LoginAdmin({sendDataToParent}) {

  const[signedIn, setSignedIn] = React.useState(false)

  const handleLogin = () => {
    setSignedIn(true)
  }

  if(signedIn){

    return(
      <HomepageAdmin sendDataToParent = {sendDataToParent}/>
    )

  } else{

    return(
      <div>
        <div className='loginAdmin'>
         <Card style={{ width: '50rem', backgroundColor: '#ff5300'}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <h1 className='header'>Login as Admin</h1>
              <input className='inputBox' type="text" placeholder="Username" autoFocus="1"/><br/>
              <input className='inputBox' type="password" placeholder="Password" autoFocus="1"/><br/>
              <Button style={{backgroundColor:'#000', borderColor: '#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem' }} onClick={handleLogin}>
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
