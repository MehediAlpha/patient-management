import React from 'react';
import './App.css';
import LoginAdmin from './Components/Admins/LoginAdmin'
import LoginDoctor from './Components/Doctor/LoginDoctor'
import LoginPatient from './Components/Patient/LoginPatient'

import { Button, Col } from 'react-bootstrap';

function App() {

  const [user, setUser ] = React.useState('home')

  const sendDataToParents = (index) => {
    console.log(index);
    setUser(index)
  };

  console.log(user)

  if(user === 'admin'){
    return(
      <div>
        <LoginAdmin sendDataToParent={sendDataToParents} />
      </div>
    )
  }

  else if(user === 'doctor'){
    return(
      <div>
        <LoginDoctor sendDataToParent={sendDataToParents} />
      </div>
    )
  }

  else if(user === 'patient'){
    return(
      <div>
        <LoginPatient sendDataToParent={sendDataToParents} />
      </div>
    )
  }

  else {
    return(
      <div className="App">
        <h1 className='headerAPP'>Choose an option</h1>
        <Button as={Col} onClick={()=> setUser('admin')} style={{margin:'15px',backgroundColor:'#ff5300', borderColor: '#ff5300', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem'}}>Admin</Button><br/>
        <Button as={Col} onClick={()=> setUser('doctor')} className="mx-3" style={{margin:'15px',backgroundColor:'#fff', borderColor: '#000', color:'#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem'}}>Doctor</Button><br/>
        <Button as={Col} onClick={()=> setUser('patient')} style={{margin:'15px',backgroundColor:'#072227', borderColor: '#072227', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem'}} >Patient</Button><br/>
      </div>
    )
  }

}


export default App;
