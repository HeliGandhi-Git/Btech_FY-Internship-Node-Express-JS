const express = require('express')
const app = express()
const port = 3000

//Middleware
app.use(express.static('public'))

//sum of two numbers:
app.get('/sum' , (req, res) => {
  res.sendFile(__dirname + '/sum.html')
})
app.get('/sumprocess' , (req, res) => {
  var num1 = parseInt(req.query.txt1)
  var num2 = parseInt(req.query.txt2)
  var sum = num1 + num2
  res.send( "value of no1 = " +num1+ "</br> value of no2 = " +num2+ "</br> sum = " +sum )
})

//searching and sorting
//http://127.0.0.1:300/search?q=iphone
//http://127.0.0.1:300/search?q=iphone&q2=ipad
app.get('/search' , (req, res) => {
  var mysearch = req.query.q
  var mysearch2 = req.query.q2
  res.send("search is " + mysearch + "</br> search2 is " + mysearch2)

})

//Navigation
//http://127.0.0.1:300/product/iphone
app.get('/product/:id' , (req, res) => {
  var mydata = req.params.id
  res.send(" Data is " +mydata)
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html')
})
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html')
})
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("Server started on http://127.0.0.1:3000")


