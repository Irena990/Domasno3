const express = require('express');
const morgan = require('morgan');
const auth = require('./handlers/authHandler');
const sportHandler = require('./handlers/sportHandler');
const db = require('./pkg/db/index');

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

db.init();

//app.post("/api/v1/auth/create-account", auth.signup);
//app.post("/api/v1/auth/login", auth.login);

app.get("/sports", sportHandler.getAll);
app.get("/sports/:id", sportHandler.getOne);
app.post("sports", sportHandler.create);
//app.patch("/sports/:id", sportHandler.update);
app.delete("/sports/:id", sportHandler.delete);

app.listen(process.env.PORT, (err) => {
    if (err) {
      return console.log("Could not start service");
    }
    console.log("service started successfully on port 10000");
  });