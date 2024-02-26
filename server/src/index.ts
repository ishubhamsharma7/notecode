import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv';
import indexRoute from "./routes/index.routes";
import cookieParser from 'cookie-parser'
dotenv.config({path:'../.env'});

const app = express()
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
app.use(bodyParser.json())


app.use(cookieParser())

app.use("/api/v1", indexRoute);
app.get('/',(req,res)=>{
    res.send('Working fine')
})

app.listen(3000,()=>console.log("Server started on port:- 3000"))