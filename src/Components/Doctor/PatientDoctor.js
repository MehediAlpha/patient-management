import React from 'react';
import { Text } from 'react';
import {Card, Button, Form} from 'react-bootstrap'
import { patientInfo, previousMedicine} from './doctorData'
import './CSS/patient.css'

function PatientDoctor() {
  const [patientID, setPatientID] = React.useState('')
  const [info, setInfo] = React.useState(patientInfo)
  const [previousM, setPreviousM] = React.useState(previousMedicine)
  
  const [medicine, setMedicine] = React.useState('')

  console.log(medicine)

  return(
    <div>
        <div className='doctorPatient'>
         <Card style={{ width: '80rem', backgroundColor: '#fff', borderWidth: '2px', borderColor: '#000'}}>
            <Card.Body>
              <h1 style={{fontSize: '3rem', fontWeight:'bold', marginBottom:'2rem'}}>Patient Prescription</h1>
              <div className='row'>
              <input className='inputBox col-md-9'  type="text" placeholder="Patient ID" autoFocus="1" onChange={(event) => setPatientID(event.target.value)}/><br/>
              <Button  style={{backgroundColor:'#000', borderColor: '#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem',  }}>
                Search
              </Button>
              </div>

              <div className='row'>
              <p className='col-md-6' style={{fontSize: '2rem'}} > {info.name} </p>
              <p className='col-md-6' style={{fontSize: '2rem'}} > {info.id} </p>
              <p className='col-md-6' style={{fontSize: '2rem'}} > {info.phone} </p>
              <p className='col-md-6' style={{fontSize: '2rem'}} > {info.email} </p>
              <p className='col-md-12' style={{fontSize: '2rem'}} > {info.address} </p>
              </div>

              <Form.Group className="inputBox col-md-12" style={{textAlign:'left'}}>
                <Form.Label style={{fontSize:'2rem'}}>New Prescription</Form.Label>
                <Form.Control style={{textAlign:'left', fontSize:'1.5rem'}} as="textarea" rows={3} onChange={(event) => setMedicine(event.target.value)}/>
              </Form.Group>
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
                    <div style={{marginBottom:'5rem'}} eventKey={i}>
                      <p style={{fontSize: '2rem', textAlign:'left' }}>Date</p>
                      <p style={{fontSize: '1.5rem', textAlign:'left' }}>{data.date}</p>
                      <Form.Group className="inputBox col-md-12" style={{textAlign:'left'}}>
                      <Form.Label style={{fontSize:'2rem'}}>Medicine</Form.Label>
                        <Form.Control style={{textAlign:'left', fontSize:'1.5rem'}} as="textarea" rows={5} placeholder={data.description} />
                        <Form.Label style={{fontSize:'2rem'}}>Test</Form.Label>
                        <Form.Control style={{textAlign:'left', fontSize:'1.5rem'}} as="textarea" rows={3} placeholder={data.test} />
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
