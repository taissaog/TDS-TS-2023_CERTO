//arquivo main

const express = require("express");
const app = express();

const routes = require("./routes/index") //criando rotas que chama de outro arquivo

app.use(express.json());  // faz a serialização dos dados

// app.get("/teste", (req, rep)=> {
//     rep.send("olá mundo!");
// });

app.listen(8080, (error)=>{   //escolhe a porta
    if(error){
        console.log(error);
    }else{
        console.log("O progama está sendo executado na porta 8080!")
    }
})