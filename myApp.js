let express = require('express');
let app = express();

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/views/index.html",function(req,res)
    {
        console.log("File successfully sent");
    });
});

































 module.exports = app;
