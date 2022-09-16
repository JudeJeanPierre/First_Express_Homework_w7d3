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
// Tip
app.get('/tip/:total/:tipPercentage', (req, res) =>{
        let total = parseInt(req.params.total)
        let tipPercentage = parseInt(req.params.tipPercentage)
        let tipTotal = (total*(tipPercentage/100)).toString()
        res.send(tipTotal)
    })









app.listen(3000, (req,res)=>{
    console.log('listening on 3000');
})