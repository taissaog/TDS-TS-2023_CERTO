const express = require("express");
const app = express();
const routes = require("./routes/routes.js");

app.use(express.json());
app.use(routes);

// app.get("/teste", (req, rep)=> {
//     rep.send("olá mundo!");
// });

app.listen(8080, (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("O progama está sendo executado na porta 8080!")
    }
})