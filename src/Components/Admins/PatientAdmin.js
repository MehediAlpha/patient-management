import React from 'react';
import { Card, Button } from 'react-bootstrap';


function PatientAdmin() {
  const [search, setSearch] = React.useState('')
  const [patientInfo, setPatientInfo] = React.useState('')

  const [ID, setID] = React.useState('')
  const [Password, setPassword] = React.useState('')
  const [Name, setName] = React.useState('')
  const [Phone, setPhone] = React.useState('')
  const [Email, setEmail] = React.useState('')
  const [RelativePhone, setRelativePhone] = React.useState('')
  const [Address, setAddress] = React.useState('')

  const patientSearch = () => {
    if(search){
      fetch('http://localhost:4000/searchPatient', {
        method: 'post',
        headers: {'content-type' : 'application/json',
              'Accept': 'application/json'},
        body: JSON.stringify({
          id : search
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPatientInfo(data)
      })
    }else{
      alert('Type ID')
    }
  }

  const patientADD = () =>{
    if(ID && Password && Name && Phone && Email && RelativePhone && Address) {
      
    }
    else{
      alert('Missed information')
    }
  }

  return(
    <div>
        <div className='doctorPatient'>
         <Card style={{ width: '80rem', backgroundColor: '#fff', borderWidth: '2px', borderColor: '#000'}}>
            <Card.Body>
              <h1 style={{fontSize: '3rem', fontWeight:'bold', marginBottom:'2rem'}}>Patient Info</h1>
              <div className='row'>
              <input className='inputBox col-md-9'  type="text" placeholder="Patient ID" autoFocus="1" 
                onChange={(event) => setSearch(event.target.value)}/><br/>
              <Button  style={{backgroundColor:'#000', borderColor: '#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem',  }}
                onClick={patientSearch}>
                Search
              </Button>
              </div>

              <div className='row'>
              <p className='col-md-6' style={{fontSize: '1.5rem'}} >Name: {patientInfo.name} </p>
              <p className='col-md-6' style={{fontSize: '1.5rem'}} >ID: {patientInfo.id} </p>
              <p className='col-md-6' style={{fontSize: '1.5rem'}} >Phone: {patientInfo.phone} </p>
              <p className='col-md-6' style={{fontSize: '1.5rem'}} >Relative Phone: {patientInfo.relative_phone} </p>
              <p className='col-md-6' style={{fontSize: '1.5rem'}} >Email: {patientInfo.email} </p>
              <p className='col-md-12' style={{fontSize: '1.5rem'}} >Address: {patientInfo.address} </p>
              </div>

              <h1 style={{fontSize: '2.5rem', fontWeight:'bold', marginTop:'1.7rem'}}>Add Patient</h1>

              <div className='row' style={{display:'flex', justifyContent:'center', }}>
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Patient ID" autoFocus="1" 
                  onChange={(event) => setID(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Patient Password" autoFocus="1" 
                  onChange={(event) => setPassword(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Patient Name" autoFocus="1" 
                  onChange={(event) => setName(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Patient Phone" autoFocus="1" 
                  onChange={(event) => setPhone(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Patient Email" autoFocus="1" 
                  onChange={(event) => setEmail(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Patient Relative Phone" autoFocus="1" 
                  onChange={(event) => setRelativePhone(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-11'  type="text" placeholder="Patient Address" autoFocus="1" 
                  onChange={(event) => setAddress(event.target.value)} />
                <Button  style={{backgroundColor:'#0000ff', borderColor: '#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem' }}
                  onClick={patientADD}>
                  Add Patient
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        
      </div>
  )
}


export default PatientAdmin;
