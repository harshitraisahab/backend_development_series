const express = require("express");

const app = express();
const usermodel = require("./usermodel.js");

app.get("/", function (req, res) {
  res.send("snk");
});

app.get("/create", async function (req, res) {
  let createduser = await usermodel.create({
    name: "harshit rai",
    email: "harshit.rai.@hj",
    username: "sds",
  });
  res.send(createduser);
});
app.listen(3000);
