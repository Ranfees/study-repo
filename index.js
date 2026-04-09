const express = require('express')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    return res.send('hi')
})
app.listen(PORT,()=>{
    console.log('app is running on 3000')
})