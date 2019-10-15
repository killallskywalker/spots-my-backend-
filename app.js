require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const errorHandler = require('./app/middleware/error_handler');
const user = require('./app/routes/user');
const UserModel = require('./app/model/user');


const port = process.env.PORT || 4000;

//defining the middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//import route
// require('./app/routes/user.js')(app);
app.use('/', user)
// production error handler
app.use(errorHandler.error);



//initiate db first , then server 
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster-one-n6hts.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
  .then(() => {
    app.listen((port), () => {
      console.log(`Server listen to request on port ${port}`)
    });
  }).catch((err) => {
    console.log(`Failed to connect: ${err}`);
});



