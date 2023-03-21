const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const { Script } = require("vm");
app.use(bodyparser.urlencoded({extended:true}));

app.get("/" , function(req,res){
    res.sendFile(__dirname + "/index.html");
   
    
})
app.post("/",function(req,res){

      
    const username = req.body.username;
    const password = req.body.password;
    const dbsid = "harish";
    const dbspass = "123456";

    function verify(){

    if(username==dbsid && password==dbspass){
        res.sendFile(__dirname + "/success.html")
    }else{
     res.status(401).send("incorrect username or password") 
    }
}
verify();
})


app.listen(3000 ,function (response){
    console.log("this port is working in the local host 3000");
});
