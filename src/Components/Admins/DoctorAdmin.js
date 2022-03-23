import React from 'react';
import { Card, Button } from 'react-bootstrap';

function DoctorAdmin() {
  const [search, setSearch] = React.useState('')
  const [doctorInfo, setDoctorInfo] = React.useState('')

  const [ID, setID] = React.useState()
  const [Password, setPassword] = React.useState('')
  const [Name, setName] = React.useState('')
  const [Phone, setPhone] = React.useState('')
  const [Email, setEmail] = React.useState('')
  const [Education, setEducation] = React.useState('')
  const [Specialized, setSpecialized] = React.useState('')
  const [DutyTime, setDutyTime] = React.useState('')
  const [Address, setAddress] = React.useState('')

  const doctorSearch = () => {
    if(search){
      fetch('http://localhost:4000/searchDoctor', {
        method: 'post',
        headers: {'content-type' : 'application/json',
              'Accept': 'application/json'},
        body: JSON.stringify({
          id : search
        })
      })
      .then(response => response.json())
      .then(data => {
        if(data === 'ID not found'){
          alert(data)
        }else{
          setDoctorInfo(data)
        }
      })
    }else{
      alert('Type ID')
    }
  }

  const doctorADD = () =>{
    if(ID && Password && Name && Phone && Email && Education && Specialized && DutyTime && Address) {
      fetch('http://localhost:4000/addDoctor', {
        method: 'post',
        headers: {'content-type' : 'application/json',
              'Accept': 'application/json'},
        body: JSON.stringify({
          id : ID,
          password: Password,
          name: Name,
          email: Email,
          address: Address,
          phone: Phone,
          dutyTime: DutyTime,
          education: Education,
          specialized: Specialized
        })
      })
      .then(response => response.json())
      .then(data => {
        alert(data)
      })
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
              <h1 style={{fontSize: '3rem', fontWeight:'bold', marginBottom:'2rem'}}>Doctor Info</h1>
              <div className='row'>
              <input className='inputBox col-md-9'  type="text" placeholder="Doctor ID" autoFocus="1" 
                onChange={(event) => setSearch(event.target.value)}/><br/>
              <Button  style={{backgroundColor:'#000', borderColor: '#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem',  }}
                onClick={doctorSearch}>
                Search
              </Button>
              </div>

              <div className='row'>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} > {doctorInfo ? 'Name: '+ doctorInfo.name : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} > {doctorInfo ? 'ID: ' + doctorInfo.id : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} > {doctorInfo ? 'Phone: ' + doctorInfo.phone : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} > {doctorInfo ? 'Email: ' + doctorInfo.email : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} > {doctorInfo ? 'Education: ' + doctorInfo.education : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} > {doctorInfo ? 'Duty Time: ' + doctorInfo.dutyTime : ''} </p>
                <p className='col-md-6' style={{fontSize: '1.5rem'}} > {doctorInfo ? 'Specialized: ' + doctorInfo.specialized : ''} </p>
                <p className='col-md-12' style={{fontSize: '1.5rem'}} > {doctorInfo ? 'Address: ' + doctorInfo.address : ''} </p>
              </div>

              <h1 style={{fontSize: '2.5rem', fontWeight:'bold', marginTop:'1.7rem'}}>Add doctor</h1>

              <div className='row' style={{display:'flex', justifyContent:'center', }}>
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Doctor ID" autoFocus="1" 
                  onChange={(event) => setID(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Doctor Password" autoFocus="1" 
                  onChange={(event) => setPassword(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Doctor Name" autoFocus="1" 
                  onChange={(event) => setName(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Doctor Phone" autoFocus="1" 
                  onChange={(event) => setPhone(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Doctor Email" autoFocus="1" 
                  onChange={(event) => setEmail(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Doctor Education" autoFocus="1" 
                  onChange={(event) => setEducation(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Doctor Specialized" autoFocus="1" 
                  onChange={(event) => setSpecialized(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-5'  type="text" placeholder="Doctor Duty Time" autoFocus="1" 
                  onChange={(event) => setDutyTime(event.target.value)} />
                <input style={{textAlign:'Left', margin:'1rem', fontSize:'1.7rem'}} className='col-md-11'  type="text" placeholder="Doctor Address" autoFocus="1" 
                  onChange={(event) => setAddress(event.target.value)} />
                <Button  style={{backgroundColor:'#0000ff', borderColor: '#000', fontWeight:'800', fontSize:'25px', height:'3rem', width:'10rem' }}
                  onClick={doctorADD}>
                  Add Doctor
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        
      </div>
  )
}


export default DoctorAdmin;
