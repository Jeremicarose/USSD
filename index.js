const express = require('express');
require('dotenv').config();
require("./service.js")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const connectDB = require('./config.js');
const Port = process.env.PORT;
const app = express();
app.listen( Port,()=>{
    console.log (`port running on ${Port}`)
     connectDB();
}
   

)
