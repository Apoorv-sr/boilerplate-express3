let express = require('express');
let app = express();

app.use("/public",express.static("public"));

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/views/index.html",function(req,res)
    {
        console.log("File successfully sent");
    });
});


// console.log("myapp.js");

































 module.exports = app;
