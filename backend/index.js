// require('dotenv').config();
// import dotenv from 'dotenv';
import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config'
// import connectDB from './connection/db';
import "./connection/db.js"
import connectDB from './connection/db.js';
import user from './models/user.js';
import User from './models/user.js';
const app = express();
 
app.use(cors(

));
app.use(json());
connectDB(); 
app.get('/', (req, res) => {
  res.send('Hello World!');
});  

//below to get username email password and then pushing the user in databse
app.post('/user', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  
  res.send(user);
});


 
const port =  3000; 
app.listen(port, () => { 
  console.log(`Server running on port ${port}`);
});
   