const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path'); // Add this line to require the 'path' module

mongoose.connect('mongodb+srv://alexdevs:hcjmern@mycluster.cjomhjv.mongodb.net/dadecreamy-real', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, function() {
    console.log("Server running on port 8080")
})

app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static('node_modules'));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html")); // Use path.join()
})

app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "about.html")); // Use path.join()
})

app.get("/events", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "events.html")); // Use path.join()
})

app.get("/gallery", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "gallery.html")); // Use path.join()
})

app.get("/menu", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "menu.html")); // Use path.join()
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
            console.log("Data Saved Successfully")
        }
    });
    res.redirect(req.headers.referer);
});

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
            console.log("Data Saved Successfully")
            res.sendFile(path.join(__dirname, "public", "signup.html")); // Use path.join()
        }
    });
});
