const express = require('express');
require('dotenv').config();
const connectDB = require('./config');
const Port = process.env.PORT;
const app = express();
app.listen( port,()=>{
    console.log (`port running on ${Port}`)
    connectDB();
}
   

)
