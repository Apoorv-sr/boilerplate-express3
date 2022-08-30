const mySecret = process.env['MESSAGE_STYLE']
let express = require('express');
let app = express();
let bodyParser=require("body-parser");
require('dotenv').config();
let date="";



// const methodPathIpLogger=function(req,res,next)
//   {
//     console.log(req.method+" "+req.path+" "+"-"+" "+req.ip);
//     next();
//   }

app.use(bodyParser.urlencoded({extended: false}));

app.use("/public",express.static("public"));

// app.get("/name",function(req,res)
//         {
//           res.json({name:req.query.first+" "+req.query.last});
//         });

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/views/index.html",function(req,res)
    {
        // console.log(__dirname);
    });
});

// app.get("/:word/echo",function(req,res)
//         {
//           // console.log(req.params);
//           res.json({echo:req.params.word});
//         });






// app.get("/now",function(req,res,next)
//         {
//           date=new Date();
//           req.time=date;
//           next();
//         },
//         function(req,res)
//         {   
//           res.json({time:req.time});
//         }
//        );

// app.get("/json",methodPathIpLogger);
// app.get("/json",function(req,res)
//         {
//           let sample="Hello json";
//           if(mySecret==="uppercase")
//           {
//             sample=sample.toUpperCase();
//           }
//           res.json({message:sample});      
//         });


 // app.get("/json",(req,res)=>{
 //   let resultMessage="Hello json";
 //   if (process.env.MESSAGE_STYLE==="uppercase"){
 //     resultMessage=resultMessage.toUpperCase();
 //   }
  
 //   res.json({"message": resultMessage});
                            
 // });



// console.log("myapp.js");

































 module.exports = app;
