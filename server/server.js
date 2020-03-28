const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const User = require('./models/user');

dotenv.config();

const app = express();

mongoose.connect(
 process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 }, (err) => {
  if (err) {
   console.log(err)
  } else {
   console.log("We are Connected to the Database!!!");
  }
 })

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extend: false
}));


// Require API's

const productRoutes = require("./routes/product");
app.use("/api", productRoutes);

//Defining and Listening Port 
app.listen(3000, err => {
 if (err) {
  console.log(err);
 } else {
  console.log("Listening on PORT", 3000);
 }
});




// // API CALL METHODS
// //Get Method - Retrieve Data from the Server
// app.get("/", (req, res) => {
//  res.json("Hello Amazon Clone");
// });

// //Post Method - Post Data to the Server
// app.post("/", (req, res) => {
//  let user = new User();
//  user.name = req.body.name;
//  user.email = req.body.email;
//  user.password = req.body.password;

//  user.save((err) => {
//   if (err) {
//    res.json(err);
//   } else {
//    res.json('Successully Saved');
//   }
//  });

// });