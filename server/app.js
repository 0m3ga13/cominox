require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
mongoose.set('strictQuery', false);
const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
} 
connectDB();
app.use('/api/post',require('./routes/routes'));
app.use(cors());
app.listen(port, ()=> console.log('server running at http://localhost:'+port));