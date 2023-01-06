const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://alexdevs:hcjmern@mycluster.cjomhjv.mongodb.net/dadecreamy-real', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: false }))

app.listen(8080, function() {
    console.log("Server running on port 8080")
})

app.use(express.static('public'))

app.get("/", function(res, req) {
    res.sendFile(__dirname + "/public/index.html")
} )

app.get("/about", function(req, res) {
    res.sendFile(__dirname + "/public/about.html")
})

app.get("/events", function(req, res) {
  res.sendFile(__dirname + "/public/events.html")
})

app.get("/gallery", function(req, res) {
    res.sendFile(__dirname + "/public/gallery.html")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    number: String
  });
  
const User = mongoose.model('User', userSchema);
  
app.post("/messages", function(req, res) {
    const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const teln = req.body.teln;
  
  const user = new User({ name: name, email: email, message: message, number: teln });
  user.save(function (error) {
    if (error) {
    console.log(error)
    } else {
    console.log("Data Saved Succesfully")
    }
  });
  res.redirect(req.headers.referer);})

const signupSchema = new mongoose.Schema({
    name: String,
    email: String
  });

const Signup = mongoose.model('Signup', signupSchema, 'signups', { databaseName: 'dadecreamy-real' });

app.post("/signup", function(req, res) {
    const signup = new Signup({
        name: req.body.names,
        email: req.body.emails
      });
          signup.save(function (error) {
        if (error) {
          console.log(error);
        } else {
          res.redirect(req.headers.referer);
          console.log("Data Saved Succesfully")

        }
  
      });
      res.redirect(req.headers.referer);
    });