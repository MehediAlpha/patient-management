import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { adminInfo } from './adminData';


function AppointmentAdmin() {
  const [patientSearch, setPatientSearch] = React.useState('')
  const [patientInfo, setPatientInfo] = React.useState('')

  const [doctorSearch, setDoctorSearch] = React.useState('')
  const [doctorInfo, setDoctorInfo] = React.useState('')

  const searchPatient = () => {
    if(patientSearch){
      fetch('http://localhost:4000/searchPatient', {
        method: 'post',
        headers: {'content-type' : 'application/json',
              'Accept': 'application/json'},
        body: JSON.stringify({
          id : patientSearch
        })
      })
      .then(response => response.json())
      .then(data => {
        if(data === 'ID not found'){
          alert(data)
        }else{
        console.log(data)
        setPatientInfo(data)
        }
      })
    }else{
      alert('Type Patient ID')
    }
  }

  const searchDoctor = () => {
    if(doctorSearch){
      fetch('http://localhost:4000/searchDoctor', {
        method: 'post',
        headers: {'content-type' : 'application/json',
              'Accept': 'application/json'},
        body: JSON.stringify({
          id : doctorSearch
        })
      })
      .then(response => response.json())
      .then(data => {
        if(data === 'ID not found'){
          alert(data)
        }else{
          console.log(data)
          setDoctorInfo(data)
        }
      })
    }else{
      alert('Type ID')
    }
  }

  const makeAppointment = () => {
    if (patientInfo.id && doctorInfo.id && adminInfo.id){
      fetch('http://localhost:4000/assign', {
        method: 'post',
        headers: {'content-type' : 'application/json',
              'Accept': 'application/json'},
        body: JSON.stringify({
          a_id : adminInfo.id,
          p_id: patientInfo.id,
          d_id: doctorInfo.id
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(typeof(patientInfo.id))
        alert(data)
      })
    }else{
      alert('Enter all ID')
    }
  }


  return(
    <div>
        <div className='doctorPatient'>
         <Card style={{ width: '80rem', backgroundColor: '#fff', borderWidth: '2px', borderColor: '#000'}}>
            <Card.Body>

              <h1 style={{fontSize: '2.5rem', fontWeight:'bold', marginBottom:'2rem'}}>Patient Data</h1>
              <div className='row'>
              <input className='inputBox col-md-9'  type="text" placeholder="Patient ID" autoFocus="1" 
                onChange={(event) => setPatientSearch(event.target.value)}/><br/>
              <Button  style={{backgroundColor:'#000', borderColor: '#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem',  }}
                onClick={searchPatient}>
                Search
              </Button>
              </div>
              <div className='row'>
              <p className='col-md-6' style={{fontSize: '1.5rem'}} >{ patientInfo ? 'Name: ' + patientInfo.name : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} >{ patientInfo ? 'ID: ' + patientInfo.id : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} >{ patientInfo ? 'Phone ' + patientInfo.phone : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} >{ patientInfo ? 'Email: ' + patientInfo.email : ''} </p>
              </div>

              <h1 style={{fontSize: '2.5rem', fontWeight:'bold', marginBottom:'2rem'}}>Doctor Data</h1>
              <div className='row'>
              <input className='inputBox col-md-9'  type="text" placeholder="Doctor ID" autoFocus="1" 
                onChange={(event) => setDoctorSearch(event.target.value)}/><br/>
              <Button  style={{backgroundColor:'#000', borderColor: '#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem',  }}
                onClick={searchDoctor}>
                Search
              </Button>
              </div>

              <div className='row'>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} > {doctorInfo ? 'Name: '+ doctorInfo.name : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} > {doctorInfo ? 'ID: ' + doctorInfo.id : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} > {doctorInfo ? 'Phone: ' + doctorInfo.phone : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} > {doctorInfo ? 'Email: ' + doctorInfo.email : ''} </p>
              </div>

              <Button  style={{backgroundColor:'#0000ff', color:'#fff', borderColor: '#000', fontWeight:'800', fontSize:'25px', padding:'0.5rem 2rem'  }}
                onClick={makeAppointment}>
                Make Appointment
              </Button>


            </Card.Body>
          </Card>
        </div>
        
      </div>
  )
}


export default AppointmentAdmin;
