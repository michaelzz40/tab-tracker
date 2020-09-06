const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => {
  res.send({
    message: `Hello ${req.body.email} Your user was register! have fun!`
  });
});

app.listen(process.env.PORT || 8081);
