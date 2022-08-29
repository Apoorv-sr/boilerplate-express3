const mySecret = process.env['MESSAGE_STYLE']
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

app.get("/json",function(req,res)
        {
          let sample="Hello json";
          if(mySecret==="uppercase")
          {
            sample=sample.toUpperCase;
          }
          res.json({message:sample});      
        });

 // app.get("/json",(req,res)=>{
 //   let resultMessage="Hello json";
 //   if (process.env.MESSAGE_STYLE==="uppercase"){
 //     resultMessage=resultMessage.toUpperCase();
 //   }
  
 //   res.json({"message": resultMessage});
                            
 // });



// console.log("myapp.js");

































 module.exports = app;
