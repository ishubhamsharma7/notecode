import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
// import 'dotenv/config'
import * as dotenv from 'dotenv';
dotenv.config({path:'../.env'});

// dotenv.config() // Load the environment variables
const app = express()

app.use(bodyParser.json())
app.use(cors())

// console.log("-->,",process.env)

app.get('/',(req,res)=>{
    res.send('Working fine')
})

app.listen(3000,()=>console.log("Server started on port:- 3000"))