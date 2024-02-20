import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('Working fine')
})

app.listen(3000,()=>console.log("Server started on port:- 3000"))