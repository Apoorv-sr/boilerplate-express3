let express = require('express');
let app = express();

app.use("/public",express.static("public"));

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/views/index.html",function(req,res)
    {
        // console.log("File successfully sent");
    });
});

let jsob={
    message:"Hello json"
}

app.get("/json",function(req,res)
{
    res.json(jsob);
});


// console.log("myapp.js");

































 module.exports = app;
