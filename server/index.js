const express = require('express')
const cors=require('cors')
const {MongoClient}=require('mongodb')
const app=express()

app.use(cors())
app.use(express.json())
const Client= new MongoClient('mongodb+srv://shaikfirdouse10:Firdouse10@@cluster0.muppwhf.mongodb.net/?retryWrites=true&w=majority')
Client.connect()        const db=Client.db('counselling')
const col = db.collection('register')
col.insertOne({'student':"123"})

app.post('/register',(req,res)=>{
    col.insertOne(req.body)
    res.send('inserted successfully')
})
app.get('/',(req,res)=>{


    res.send('Hello World')
})

app.get('/about',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})
app.listen('8085',()=>{console.log('Server is Running')})