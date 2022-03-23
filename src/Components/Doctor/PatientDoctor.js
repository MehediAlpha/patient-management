import React from 'react';
import {Card, Button, Form} from 'react-bootstrap'
import { previousMedicine, doctorInfo} from './doctorData'
import './CSS/patient.css'

function PatientDoctor() {
  const [patientID, setPatientID] = React.useState('')
  const [patientInfo, setPatientInfo] = React.useState()
  const [previousM, setPreviousM] = React.useState(previousMedicine)
  
  const [medicine, setMedicine] = React.useState('None')
  const [test, setTest] = React.useState('No\nne')


  const patientSearch = () => {
    if(patientID){
      fetch('http://localhost:4000/searchPatientByDoctor', {
        method: 'post',
        headers: {'content-type' : 'application/json',
              'Accept': 'application/json'},
        body: JSON.stringify({
          p_id : patientID,
          d_id: doctorInfo.id
        })
      })
      .then(response => response.json())
      .then(data => {
        if(data === 'Patient Not Found' || data === 'Wrong ID'){
          setPatientInfo('')
          alert(data)
        }else{
          setPatientInfo(data)
          fetch('http://localhost:4000/getPrescription', {
            method: 'post',
            headers: {'content-type' : 'application/json',
                  'Accept': 'application/json'},
            body: JSON.stringify({
              p_id : patientID,
              d_id: doctorInfo.id
            })
          })
          .then(response => response.json())
          .then(data2 => {
            setPreviousM(data2)
          })
        }
      })
    }else{
      alert('Type ID')
    }
  }

  const setPrescription = () => {


    if(patientID && doctorInfo.id ){
      console.log(typeof(medicine))
      if(window.confirm("Are you sure ?")){
        fetch('http://localhost:4000/setPrescription', {
          method: 'post',
          headers: {'content-type' : 'application/json',
                'Accept': 'application/json'},
          body: JSON.stringify({
            test: test,
            description: medicine,
            p_id : patientID,
            d_id: doctorInfo.id
          })
        })
        .then(response => response.json())
        .then(data => {
          alert(data)
        })
      }
      
      
    }else{
      alert('Set patient ID first')
    }
  }

  return(
    <div>
        <div className='doctorPatient'>
         <Card style={{ width: '80rem', backgroundColor: '#fff', borderWidth: '2px', borderColor: '#000'}}>
            <Card.Body>
              <h1 style={{fontSize: '3rem', fontWeight:'bold', marginBottom:'2rem'}}>Patient Prescription</h1>
              <div className='row'>
              <input className='inputBox col-md-9'  type="text" placeholder="Patient ID" autoFocus="1" onChange={(event) => setPatientID(event.target.value)}/><br/>
              <Button  style={{backgroundColor:'#000', borderColor: '#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem',  }}
                onClick={patientSearch}>
                Search
              </Button>
              </div>

              <div className='row'>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} >{ patientInfo ? 'Name: ' + patientInfo.name : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} >{ patientInfo ? 'ID: ' + patientInfo.id : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} >{ patientInfo ? 'Phone ' + patientInfo.phone : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} >{ patientInfo ? 'Email: ' + patientInfo.email : ''} </p>
                <p className='col-md-12' style={{fontSize: '1.5rem'}} >{ patientInfo ? ' ' + patientInfo.address : ''} </p>
              </div>

              <Form.Group className="inputBox col-md-12" style={{textAlign:'left'}}>
                <Form.Label style={{fontSize:'2rem'}}>New Prescription</Form.Label>
                <Form.Control style={{textAlign:'left', fontSize:'1.5rem'}} as="textarea" rows={3} 
                onChange={(event) => setMedicine(event.target.value)}/>
                <Form.Label style={{fontSize:'2rem'}}>New Test</Form.Label>
                <Form.Control style={{textAlign:'left', fontSize:'1.5rem'}} as="textarea" rows={3} 
                onChange={(event) => setTest(event.target.value)}/>
              </Form.Group>
              <Button  style={{backgroundColor:'#0000FF', borderColor: '#000', fontWeight:'800', fontSize:'25px', padding:'1rem 2rem' }}
                onClick={setPrescription}>
                Create Prescription
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className='doctorPatient'>
          <Card style={{ width: '100rem', backgroundColor: '#fff', borderWidth: '2px', borderColor: '#000'}}>
            <Card.Body>
              <h1 style={{fontSize: '3rem', fontWeight:'bold', marginBottom:'2rem'}}>Previous Medicine</h1>
              {
                previousM.map((data, i) => {
                  return(
                    <div style={{marginBottom:'5rem'}} key={i}>
                      <p style={{fontSize: '1.7rem', textAlign:'left', backgroundColor: '#fa9667', paddingLeft:'1rem'}}>Date - {data.date.substring(0,10)}</p>
                      <Form.Group className="inputBox col-md-12" style={{textAlign:'left'}}>
                      <Form.Label style={{fontSize:'2rem'}}>Medicine</Form.Label>
                        <Form.Control style={{textAlign:'left', fontSize:'1.5rem'}} as="textarea" rows={5} value={data.description} disabled/>
                        <Form.Label style={{fontSize:'2rem'}}>Test</Form.Label>
                        <Form.Control style={{textAlign:'left', fontSize:'1.5rem'}} as="textarea" rows={3} value={data.test} disabled/>
                      </Form.Group>
                    </div>
                  )
                })
              }


            </Card.Body>
          </Card>
        </div>
      </div>
  )
}


export default PatientDoctor;
