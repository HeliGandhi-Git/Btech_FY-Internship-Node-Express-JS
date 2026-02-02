const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

//view engine setup
app.set('views',__dirname + '/views')
app.set('view engine', 'ejs')

//Middleware
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.render('home')
})
app.get('/form', (req, res) => {
  res.render('form')
})
app.post('/formprocess', (req, res) => {
    var a = req.body.txt1
    var b = req.body.txt2
    var c = parseInt(a) + parseInt(b)
    res.render('ans', {mya:a, myb:b, myc:c})
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("Server started on http://127.0.0.1:3000")