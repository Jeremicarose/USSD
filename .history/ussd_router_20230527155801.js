const express = require('express');
const { ussdRouter } = require('ussd-router');
const router = express.Router();

//post, delete, update,read - call,send
router.post('/',async (req,res,next)=>{
    //define text, phone
    const {sessionId,serviceCode,phoneNumber,text} = req.body;
    const footer = `\n0: Back 00: Home`;
    let response = '';
    var data = text.split('*');

    if(text == ''){
        response = `CON WELCOME TO CELLO WALLET 1: BALANCE`
    }else if(text == '1'){
        response = `CON Your balance is 1000 cUSD ${footer}`

    } catch {
        
    }
})