require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const Port = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.json(require('./data.json'))
})
app.get('/appointment',(req,res)=>{
    res.json(require('./appointment.json'))
})
app.listen(Port,()=>{
    console.log('server is running ',Port)
})