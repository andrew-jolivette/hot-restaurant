const express = require("express");
const path = require("path");


const PORT = process.env.PORT || 3000;
const app = express();
var yoda = {
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  };
  
  var darthmaul = {
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  };


app.get("/",(req,res) => {
    res.send("hello there pal");
});

app.get("/api/:list",(req,res) => {
    const api = req.params
    res.json(api);
});

app.get("/uwu",(req,res) => {
    res.send("hello there pal");
});








app.listen(PORT, function(){
    console.log(`app listening on PORT ${PORT}`);
});