const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath));



app.get("/", function(req,res){
    let htmlPath = path.resolve(__dirname,"./src/views/home.html");
    res.sendFile(htmlPath);
});

app.get("/register", function(req,res){
    let registroPath = path.resolve(__dirname,"./src/views/register.html");
    res.sendFile(registroPath);
});

app.get("/login", function(req,res){
    let loginPath = path.resolve(__dirname,"./src/views/login.html");
    res.sendFile(loginPath);
});

const port = process.env.PORT || 3030

app.listen(port,()=> 
    console.log("El servidor http://localhost:"+port+" esta corriendo")
);

