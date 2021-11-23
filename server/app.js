var cors = require('cors')
var express = require('express');
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
var productMaster = require('./routers/product-master');
var productsRouter = require('./routers/products.router');
var usersRouter = require('./routers/users.router');

var app = express();
app.use(cors())

const dbURL ='mongodb+srv://Sachin:Sachin@01@cluster0.c1eoc.mongodb.net/retailerApp?retryWrites=true&w=majority';
console.log('DB>>>>'+dbURL);

mongoose.connect(dbURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connection Successful"))
.catch((err) => console.error("Connection error",err ));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/product_images', express.static('product_images'));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS");
    next();
  });

app.use('/api/productMaster',productMaster);

app.use('/api/productsRouter',productsRouter);

app.use('/api/usersRouter',usersRouter);

module.exports = app;