const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;


const reservationList = [];
const waitList = [];
const fullList = {reservationList,waitList}

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"home.html"));
});
app.get("/reserve",(req,res) => {
    res.sendFile(path.join(__dirname,"reserve.html"));
});
app.get("/tables",(req,res) => {
    res.sendFile(path.join(__dirname,"tables.html"));
});

app.get("/api/:list",(req,res) => {
    const api = req.params.list;
    res.json(fullList[api]);
});


app.post("/api/list",(req,res) => {
    const reservation = req.body;
    if (reservationList.length < 6){
        reservationList.push(reservation)
    }else{
        waitList.push(reservation)
    }
    res.json(reservation)

})






app.listen(PORT, function(){
    console.log(`app listening on PORT ${PORT}`);
});