const express = require('express')
const app = express()
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())


const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String
})
const Tests = mongoose.model('tests', userSchema)

mongoose.connect("mongodb://127.0.0.1:27017/test", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected ...");
    })
    .catch((err) => {
        console.log(err);
    })

app.post('/login',async(req,res) => {
    const {email,password} = req.body
    await (Tests.findOne({email:email}))
    .then(async(user) => {
        if(user){
            const passwordMatch = await bcrypt.compare(password,user.password)
            if(passwordMatch){
                res.status(200).json({m : "login success" })
            }
            else{
                console.log("password does not match");
            }
        }
        else{
            console.log("no user");
        }
    })
    .catch((err) => {
        console.log(err);
    })
})    


app.post('/sign-up', async (req, res) => {
    const {fname,lname,email,password} = req.body
    await (Tests.findOne({email:email}))
    .then(async(user) => {
        if(user){
           return res.send({message:"user already exists"})
        }
        else{
            const hashedPassword = await bcrypt.hash(password,10)
            const userInfo = new Tests({
                fname,
                lname,
                email,
                password : hashedPassword
            })
            
            userInfo.save().then((err,res) => {
                console.log("Registered");
                
            })
        }
    })
    .catch((err) => {
        res.send(err)
    })
    

})

app.listen(3001, () => {
    console.log("Server running ....");
})


































