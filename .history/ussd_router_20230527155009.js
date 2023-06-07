const express = require('express');
const { ussdRouter } = require('ussd-router');
const router = express.Router();

//post, delete, update,read - call,send
router.post('/',async (req,res,next)=>{
    //define text, phone
    const {sessionId,serviceCode,phoneNumber,text} = req.body;
    const footer = `\n 99. Back`;
    let response = '';
    var data = text.split('*');

    if(text == ''){
}