import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { adminInfo } from './adminData';


function AppointmentAdmin() {
  const [patientSearch, setPatientSearch] = React.useState('')
  const [patientInfo, setPatientInfo] = React.useState('')

  const [doctorSearch, setDocotorSearch] = React.useState('')
  const [doctorInfo, setDocotorInfo] = React.useState('')

  const searchPatient = () => {
    if(patientSearch){
      console.log(patientSearch)
    } else{
      alert('Type Patient ID')
    }
  }

  const searchDoctor = () => {
    if(doctorSearch){
      console.log(doctorSearch)
    } else{
      alert('Type Doctor ID')
    }
  }

  const makeAppointment = () => {
    if (patientSearch && doctorSearch && adminInfo.id){
      console.log(` ${patientSearch}  ${doctorSearch}  ${adminInfo.id}`)
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
                <p className='col-md-6' style={{fontSize: '2rem'}} > {patientInfo.name} </p>
                <p className='col-md-6' style={{fontSize: '2rem'}} > {patientInfo.id} </p>
                <p className='col-md-6' style={{fontSize: '2rem'}} > {patientInfo.phone} </p>
                <p className='col-md-6' style={{fontSize: '2rem'}} > {patientInfo.email} </p>
              </div>

              <h1 style={{fontSize: '2.5rem', fontWeight:'bold', marginBottom:'2rem'}}>Doctor Data</h1>
              <div className='row'>
              <input className='inputBox col-md-9'  type="text" placeholder="Doctor ID" autoFocus="1" 
                onChange={(event) => setDocotorSearch(event.target.value)}/><br/>
              <Button  style={{backgroundColor:'#000', borderColor: '#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem',  }}
                onClick={searchDoctor}>
                Search
              </Button>
              </div>

              <div className='row'>
              <p className='col-md-6' style={{fontSize: '2rem'}} > {doctorInfo.name} </p>
                <p className='col-md-6' style={{fontSize: '2rem'}} > {doctorInfo.id} </p>
                <p className='col-md-6' style={{fontSize: '2rem'}} > {doctorInfo.phone} </p>
                <p className='col-md-6' style={{fontSize: '2rem'}} > {doctorInfo.email} </p>
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
