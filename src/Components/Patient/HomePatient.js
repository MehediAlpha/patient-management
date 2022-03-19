import React from 'react';

import './CSS/homePatient.css'
import patientLogo from './CSS/patient.png'

function HomePatient() {

    const [info, setInfo] = React.useState()

    React.useEffect(() => {
        fetch('http://localhost:4000/getPatientInfo', {
            method: 'get',
            headers: {'content-type' : 'application/json',
                  'Accept': 'application/json'},
          })
          .then(response => response.json())
          .then(data =>{
            setInfo(data)
          })
    })

  return(
    <div style={{margin:'2rem'}} className="page-content page-container" id="page-content">
      <div >
          <div className="row d-flex justify-content-center">
              <div className="col-xl-12 col-md-12">
                  <div className="card user-card-full">
                      <div className="row">
                          <div className="col-md-4 bg-c-lite-green user-profile">
                              <div className="card-block text-center text-white">
                                  <div style={{marginBottom:'35px'}}> 
                                      <img src={patientLogo} width="100px" alt="User-Profile"/> 
                                  </div>
                                  <h3 style={{fontSize:'2.2rem'}}>{info ? info.name : 'Name Loading' }</h3>
                                  <p style={{fontSize:'1.5rem'}}>{info ? info.id : 'ID Loading' }</p> 
                                  
                              </div>
                          </div>

                          <div className="col-md-8">
                              <div className="card-block m-b-40">
                                  <h1 style={{fontSize:'3rem',fontWeight:'bold'}}>Information</h1>
                                  <div className="row">
                                      <div className="col-sm-6 m-b-40">
                                          <p style={{fontSize:'1.7rem', fontWeight:'bold'}}>Phone</p>
                                          <h6 style={{fontSize:'1.5rem'}}>{info ? info.phone : 'Phone Loading' }</h6>
                                      </div>
                                      <div className="col-sm-6 m-b-40">
                                          <p style={{fontSize:'1.7rem', fontWeight:'bold'}}>Relative Phone</p>
                                          <h6 style={{fontSize:'1.5rem'}}>{info ? info.relative_phone : 'Relative_Phone Loading' }</h6>
                                      </div>
                                      <div className="col-sm-6 m-b-40">
                                          <p style={{fontSize:'1.7rem', fontWeight:'bold'}}>Email</p>
                                          <h6 style={{fontSize:'1.5rem'}}>{info ? info.email : 'Email Loading' }</h6>
                                      </div>
                                      <div className="col-sm-6 m-b-40">
                                          <p style={{fontSize:'1.7rem', fontWeight:'bold'}}>Address</p>
                                          <h6 style={{fontSize:'1.5rem'}}>{info ? info.address : 'Address Loading' }</h6>
                                      </div>
                                      
                                  </div>
                                  
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}


export default HomePatient;
