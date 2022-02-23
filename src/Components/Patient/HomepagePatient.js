import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavPatient from './NavPatient';

import HomePatient from './HomePatient'
import PrescriptionPatient from './PrescriptionPatient';

function HomepagePatient({sendDataToParent}) {
  return(
    <Router>
      
        <NavPatient sendDataToParent = {sendDataToParent}/>
        <Routes>
          <Route path='/' exact element={<HomePatient/>} />
          <Route path='/prescriptionPatient' exact element={<PrescriptionPatient/>} />
        </Routes>
      
    </Router>
  )
}


export default HomepagePatient;
