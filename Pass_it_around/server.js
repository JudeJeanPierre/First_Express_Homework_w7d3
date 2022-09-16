const express = require('express')
const app = express()
const ejs = require('ejs')

// 99 bottles
app.get('/bottle', (req, res) =>{
    const minus = parseInt(req.params.bottle)
        const newBottles = (minus - 1).toString()
        res.send(
        "<h1>+ req.params.bottle +  Bottles of beer on the wall </h1>"
            + "<h1>+ req.params.bottle +  Bottles of beer</h1>"
            + "<h1><a href="/ + newBottles + ">Please, take one down, pass it around</a></h1>"
            + "<h1> + newBottles +  Bottles of beer on the wall.</h1>")
})
app.get('/0', (req, res)=>{
        res.send("<h1> 0 Bottles of beer on the wall </h1>" + "<h1>0 Bottles of beer</h1>" 
        + "<h1><a href="/">Please, go to the store, and buy some more</a></h1>" + "<h1>99 Bottles of beer on the wall.</h1>")
    })









app.listen(3000, (req, res) =>{
    console.log('listening on 3000')
})