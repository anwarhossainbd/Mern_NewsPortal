const express = require('express');

const dotEnv = require('dotenv');

const app = express();

app.get('/',(req,res)=>{
    res.send('server is running')
})

dotEnv.config({
    path : 'backend/config/config.env'
})

const PORT = process.env.PORT || 5001

app.listen(PORT,(error)=>{
    if(!error){
        console.log(`server is running at ${PORT}`)
    }
})