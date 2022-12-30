const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(8080, function() {
    console.log("Server running on port 8080")
})

app.use(express.static('public'))

app.get("/", function(res, req) {
    res.sendFile(__dirname + "/public/index.html")
} )

app.post("/", function(req, res) {
    console.log(req.body.email)
    res.redirect("/")

})