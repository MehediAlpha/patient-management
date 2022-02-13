import React from 'react';
import './App.css';
import Admin from './Components/Admins/LoginAdmin'

import { Button, Col } from 'react-bootstrap';

function App() {

  const [user, setUser ] = React.useState('home')

  if(user === 'admin'){
    return(
      <div>
        <Admin/>
        <Button as={Col} onClick={()=> setUser('home')} variant="danger">go back</Button>
      </div>
    )
  }
  else {
    return(
      <div className="App">
        <h1 className='headerAPP'>Choose an option</h1>
        <Button as={Col} onClick={()=> setUser('admin')} style={{margin:'15px',backgroundColor:'#000', borderColor: '#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem'}}>Admin</Button><br/>
        <Button as={Col} className="mx-3" style={{margin:'15px',backgroundColor:'#fff', borderColor: '#000', color:'#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem'}}>Doctor</Button><br/>
        <Button as={Col} style={{margin:'15px',backgroundColor:'#ff5300', borderColor: '#ff5300', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem'}} >Patient</Button><br/>
      </div>
    )
  }

}


export default App;
