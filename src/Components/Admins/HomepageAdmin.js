import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavAdmin from './NavAdmin';

import HomeAdmin from './HomeAdmin'
import DoctorAdmin from './DoctorAdmin'
import PatientAdmin from './PatientAdmin'
import AppointmentAdmin from './AppointmentAdmin'

function HomepageAdmin({sendDataToParent}) {
  return(
    <Router>
        <NavAdmin sendDataToParent = {sendDataToParent} />
        <Routes>
          <Route path='/' exact element={<HomeAdmin/>} />
          <Route path='/doctorAdmin' element={<DoctorAdmin/>} />
          <Route path='/patientAdmin' element={<PatientAdmin/>} />
          <Route path='/appointmentAdmin' element={<AppointmentAdmin/>} />
        </Routes>
    </Router>
  )
}


export default HomepageAdmin;
