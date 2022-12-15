const express = require('express');

const app = express()

app.get('/', (req, res, next)=>{
    console.log("Hello there!")
    next()
})

app.get('/', (req, res, next)=>{
    res.send("Ok bye now!")
})

app.listen(4500, ()=>{console.log("Connected")})