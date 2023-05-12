const express = require("express");
const routes = require("./routes/index.js");
const hbs = require("hbs");

const app = express();

app.use(express.json());



hbs.registerPartials(`${__dirname}/views`);

app.set("view engine", "hbs"); //toda vez que foz utilizar hbs tem que fazer isso para liberar a pasta
app.set("view options", {
  layout: "layouts/default",
})

app.use(routes);

app.listen(8080, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("O servidor esta rodando na porta 8080! 👍");
});
