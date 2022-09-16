const express = require ('express')
const app = express()
const ejs = require ('ejs')

// Magic 8 ball
const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
    ];
    
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

// Magic ball route
app.get('/magic', (req, res) =>{
    res.send('Ask a question in the url')
})
app.get('/magic/:question', (req, res) =>{
    let randomAnswer = answers[Math.floor(Math.random()*answers.length)]
    res.send(req.params.question + '? ' + ' Answer: ' + randomAnswer)
})








app.listen(3000, (req,res)=>{
    console.log('listening on 3000');
})