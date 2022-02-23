import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavDoctor from './NavDoctor';

import HomeDoctor from './HomeDoctor'
import PatientDoctor from './PatientDoctor'

function HomepageDoctor({sendDataToParent}) {
  return(
    <Router>
      
        <NavDoctor sendDataToParent = {sendDataToParent}/>
        <Routes>
          <Route path='/' exact element={<HomeDoctor/>} />
          <Route path='/patientDoctor' element={<PatientDoctor/>} />
        </Routes>
      
    </Router>
  )
}


export default HomepageDoctor;
