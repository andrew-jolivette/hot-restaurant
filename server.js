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

app.get("/api/tables/:list",(req,res) => {
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

app.post("/api/remove/:id", (req, res) => {
    const remove = req.body.id
    for(let i = 0; i < reservationList.length; i++){
        if (remove === reservationList[i].id){
            reservationList.splice(i, 1);
            if(waitList.length > 0){
                reservationList.push(waitList[0]);
                waitList.splice(0, 1);
            }
        }
    }
    res.json(`ID-${remove} Removed!`);
});




app.listen(PORT, function(){
    console.log(`app listening on PORT ${PORT}`);
});