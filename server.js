const express = require('express')
const studentRoute = require('./src/student/routes');

const app= express()
const port =7000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hi')
})


app.use('/api/v1/students', studentRoute );

app.listen(port,()=>{ console.log(`app listing on ${port}`)})