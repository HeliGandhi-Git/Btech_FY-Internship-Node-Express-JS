const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

//Json Middleware
app.use(express.json())

//Import Model
const Products = require('./models/products')

//DB connection start
mongoose.connect('mongodb://127.0.0.1:27017/mydb1')
    .then(() => console.log('MongoDB connected'))
    .catch(() => console.log("Error in mongodb connection"))
//DB connection end

app.get('/add-product', (req, res) => {
    //UserData Object
    var userData = {
        product_name: "iPhone",
        product_details: "Best Phone",
        product_price: 85000
    }
})

//Assigned Data to Model
var mydata = Products(userData)

//Save in DB
mydata.save()
    .then(() => {
        res.send("Record Added")
    })
    .catch(() => res.send("Error Record Add"))


app.get('/display-product', (req, res) => {
    //Fetch data from connection 
    Products.find()
        .then((mydata) => {
            console.log(mydata)
            res.send(JSON.stringify(mydata))
        })
        .catch((err) => { console.log("Error in fetch" + err) })
})

//Add API
app.post('/add-product-api', (req, res) => {
    Products.create(req.body)
        .then(() => res.json({ flag: 1, msg: 'Product Added' }))
        .catch(err => console.error(err));
});

//Display data API
app.get('/display-product-api', (req, res) => {
    Products.find()
        .then(pdata => res.json(pdata))
        .catch(err => console.error(err));
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log("Server started on http://127.0.0.1:3000")