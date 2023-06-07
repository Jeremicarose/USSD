const express = require('express');
require('dotenv').config();
require("./service.js")
const connectDB = require('./config');
const Port = process.env.PORT;
const app = express();
app.listen( Port,()=>{
    console.log (`port running on ${Port}`)
    // connectDB();
}
   

)
