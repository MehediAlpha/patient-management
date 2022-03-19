import React from 'react';
import {Accordion, Button} from 'react-bootstrap'
import './CSS/prescriptionPatient.css'

const id = [
  {
    id: 1,
    date: 'loading',
    name: 'loading'
  }
]



const handlePDF = (id) => {
  fetch('http://localhost:4000/pdfPrescription', {
			method: 'post',
			headers: {
                'content-type' : 'application/json',
				        'Accept': 'application/pdf',
                'action' : 'pdfMake/pdf'},
			body: JSON.stringify({
				id : id
			})
		})
		.then(res => res.blob())
    .then(response => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response], {
        type: "application/pdf"
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
    })
    .catch(error => {
        console.log(error);
    });
}


function PrescriptionPatient() {

  const [prescriptionList, setPrescriptionList] = React.useState(id)

  React.useEffect(() => {
    fetch('http://localhost:4000/prescriptionList', {
        method: 'get',
        headers: {'content-type' : 'application/json',
              'Accept': 'application/json'},
      })
      .then(response => response.json())
      .then(data =>{
        //console.log(data)
        setPrescriptionList(data)
      })
})

  return(
    <div style={{height:'93vh', margin:'1rem'}}>
      <Accordion defaultActiveKey="1">

      {
        prescriptionList.map((data, i) => {
          
          return(
            <Accordion.Item eventKey={i} className='listSingle'  >
            <Accordion.Header > 
              <p className='header'>{data.date.substring(0, 10)}</p>
              </Accordion.Header>
            <Accordion.Body >
              <p className='description'> 
                Doctor Name: {data.name}
              </p>
              <Button style={{width:'50vw', fontSize:'1.5rem'}} onClick={() => handlePDF(data.id)}>Download Prescription</Button>
            </Accordion.Body>
          </Accordion.Item>
          )
        })

      }

      </Accordion>
    </div>
  )
}


export default PrescriptionPatient;
