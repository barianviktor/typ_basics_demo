console.log(Date.now())

const express = require('express')
const cors = require('cors')
const app = express()

const port = 3000
app.use(cors())

//bodyparse from json to native js
app.use(express.json())
//DB
const users = []

app.get('/user', (req, res, next) => {
    console.log(`REQUEST URL: ${req.url}`)
    console.log(`REQUEST METHOD: ${req.method}`)
    res.json(users)
    //res.status(200).send('asd')
})

app.post('/user', (req,res,next) => {
    console.log(`REQUEST URL: ${req.url}`)
    console.log(`REQUEST METHOD: ${req.method}`)
    const body = req.body
    const user = {
        id:users.length+1,
        username : req.body.username,
        email:req.body.email,
        password:req.body.password,
        cat:Date.now(),
        uaz:Date.now()
    }
    users.push(user)
    
    res.status(201).json(user)
})


app.listen(port, () => console.log('app is listening'))