const express= repuire('express');
const port = 3000;
const morgan = require('morgan')

const app =express();

app.get('/', (req,res) =>{
    res.send("Hej");
});

app.listen(port,() =>{
    console.log(`Nån va här sigma, ${3000}`);
});