const express = require('express')
const cors = require('cors');
const knex = require('knex');

const app = express()
const port = 4000

app.use(express.json())
app.use(cors());


const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'password',
      database : 'db_pms'
    }
});

app.post('/signInAdmin', (req, res) => {
    db.select('*').from('tbl_admin').where('id', '=', req.body.id).then(data => {
        if(data[0].password === req.body.password){
            res.json('Success')
        } else {
            res.json('Wrong Password')
        }
    }).catch(err => res.status(500).json('Wrong ID'));
})

app.post('/signInDoctor', (req, res) => {
    db.select('*').from('tbl_doctor').where('id', '=', req.body.id).then(data => {
        if(data[0].password === req.body.password){
            res.json('Success')
        } else {
            res.json('Wrong Password')
        }
    }).catch(err => res.status(500).json('Wrong ID'));
})

app.post('/signInPatient', (req, res) => {
    db.select('*').from('tbl_patient').where('id', '=', req.body.id).then(data => {
        if(data[0].password === req.body.password){
            res.json('Success')
        } else {
            res.json('Wrong Password')
        }
    }).catch(err => res.status(500).json('Wrong ID'));
})


app.get('/', (req, res) => {
    res.send(`Hello from the port ${port}`)
})


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})