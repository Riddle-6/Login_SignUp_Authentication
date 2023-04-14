const express = require('express')
const app = express()

const mongoose = require('mongoose')
const Tests = require('../models/schema')

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/test",{useNewUrlParser:true,useUnifiedTopology:true})
.then((d) => { 
    console.log("Connected ...");
})
.catch((err) => {
    console.log(err);
})


const userInfo = new Tests({
    fname : "jshf",
    lname : "jshf",
    email : "jshf",
    password : "jshf"
})

userInfo.save().then(e => console.log(e)).catch(e => console.log(e))


app.listen(5000,() => {
    console.log("Server running ....");
})
