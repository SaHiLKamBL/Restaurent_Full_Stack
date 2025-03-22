import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
const app=express()
const port = process.env.PORT || 3000;
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
app.use(cors())
app.use(bodyParser.json())
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    console.error("❌ MONGO_URL is not set. Check your .env file.");
    process.exit(1); 
}

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

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
