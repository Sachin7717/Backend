require('dotenv').config()

const express = require('express')
const app = express()

const port = 5000

app.get('/', (req,res) =>{
    res.send('hello')

})

app.listen(process.env.PORT,() => {
     console.log(`the cureent port is ${port}`);
    
})

app.get('/instagram', (req, res) => {
    res.sendFile(__dirname + '/first.html');
});

app.get('/github', (req,res) => {
    res.send('this is github sachin7717')
})