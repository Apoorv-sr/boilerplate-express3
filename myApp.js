let express = require('express');
let app = express();
require('dotenv').config();

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
    let temp=process.env.MESSAGE_STYLE;
    if(temp==="uppercase")
    {
        res.json({message:"HELLO JSON"});
    }
    else
    {
        res.json(jsob);
    }
    
    console.log(temp);
});




// console.log("myapp.js");

































 module.exports = app;
