import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
const app=express()
const port=3000;
import bodyParser from 'body-parser';

app.use(cors())
app.use(bodyParser.json())
mongoose.connect('mongodb+srv://sahilkamble1205:h3snmDysqhieXeUf@hotel.rf3tv.mongodb.net/Restaurent')
let db=mongoose.connection;

db.once('open',()=>{
   console.log("Mongodb Connected Successfully")
})

app.post('/',async(req,res)=>{
  
   await db.collection('booking').insertOne({
     username:req.body.username,
     email:req.body.email,
     date:req.body.date,
     people:req.body.people,
     text:req.body.text 
   })
})

app.post('/contact',async(req,res)=>{
   
   await db.collection('Contact').insertOne({
     username:req.body.name,
     email:req.body.email,
    message:req.body.message,
     subject:req.body.subject
   })
})


app.listen(port,()=>{
   console.log(`listing to port ${port}`)
})
