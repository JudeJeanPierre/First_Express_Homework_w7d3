const express = require ('express')
const app = express()
const ejs = require ('ejs')

app.get('/greeting', (req, res) =>{
    res.send('Hello, Stranger')
})
// add route
app.get('/greeting/:name', (req, res) =>{
    res.send('Hello ' + req.params.name + '!' +' It is so great to see you.' )
})









app.listen(3000, (req,res)=>{
    console.log('listening on 3000');
})