const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs"); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.listen(3000, () => {
    console.log("Server Started on port 3000");
});

app.get("/", (req,res) => {
    res.send("Server is Running");
})