

let doctorInfo = {
    name: "Loading",
    id: "Loading",
    phone: "Loading",
    email: "Loading",
    address: "Loading",
    dutyTime: "Loading",
    education: "Loading",
    specialized: "Loading"
}

let patientInfo = {
    name: "Name",
    id: "ID",
    phone: "Phone",
    email: "Email",
    address: "Address",
}

let previousMedicine = [
    {
        id : 1,
        description: 'Medicine 1\nMedicine 2',
        test:  'Test 1\nTest 2',
        date: 'dd-mm-yyyy'
    },
    {
        id : 2,
        description: 'Medicine 1\nMedicine 2',
        test:  'Test 1\nTest 2',
        date: 'dd-mm-yyyy'
    }
]



const setDoctorInfo = (data) => {
    doctorInfo = data
}

const setPatientInfo = (data) => {
    patientInfo = data
}

const setPreviousMedicine = (data) => {
    previousMedicine = data
}



export {doctorInfo, patientInfo, previousMedicine, setDoctorInfo, setPatientInfo, setPreviousMedicine}