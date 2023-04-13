const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.send("olá");
});

app.get("/", (request, response) => {
    response.send("olá");
});

app.post("/login", (request, response) => {

    const { user, senha } = request.body;

    // response.send(

    //     {
    //         message: "Autenticação realizada com sucesso!",
    //         data: `${user} - ${senha}`,
    //     }  
        
    //     );

    if(user == "taissa.oliveira" && senha == "1234"){
        response.send(`Login efetuado com sucesso`);
    }else{
        response.send(`Usuário ou senha inválidos`);
    }
});

app.listen(8007, (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log("Servidor está rodando na porta 8007");
    }
});
