const express = require("express");

const app = express();

app.get("/", (req, resp)) => {
    resp.send("ola")
}

app.listen(8080, () => {
    console.log("servidor está rodando na porta 8080!")
});