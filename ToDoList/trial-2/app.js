const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>{
    const {name} =req.query;
    res.send(`Hello ${name}`);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});