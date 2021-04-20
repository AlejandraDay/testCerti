//npm init -y => Add package.json
//npm i nodemon ->  npm run dev
//npm i morgan
/*const http = require('http')

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.end('200 code')
})

server.listen(3000, () => {
    console.log('Listen 3000 port')
})*/


/*
const express = require('express')
const morgan = require('morgan')

const app = express()

require('./database')
function logger(req, res, next) {
    console.log(`Route Received ${req.protocol}://${req.get('host')}${req.originalURL}`)
    next()
}
app.set('Port', 4000)
app.use(morgan('dev'))

app.all("/user", (req,res,next) => {
    console.log('GET USER')
    res.send('GET USER')
    if(1 == 1) {
    next();
    }else{
        res.send("Don't have permission");
    }
})

app.get("/user/:userID", (req,res) => {
    console.log("Added user")
    res.send(`Post user con ID: ${req.param.userID}`)
})
app.post("/", (req,res) => {
    console.log('POST USER')
    res.json({"name":"certi","version:":1})
}) 
app.put("/", (req,res) => {
    console.log('Hello word PUT')
    res.send('Hello word PUT')
})
app.delete("/", (req,res) => {
    console.log('Hello word DELETE')
    res.send('Hello word DELETE')
})


app.listen(app.get('Port'), () => {
    console.log('Express server on port 4000')
})*/