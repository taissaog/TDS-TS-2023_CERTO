const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", [], (request, response)=>{
    response.send("olá");
});

app.post("/login", (request, response) =>{
    response.send(request.body)    
});

app.listen(8007, (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log("Servidor está rodando na porta 8081");
    }
});