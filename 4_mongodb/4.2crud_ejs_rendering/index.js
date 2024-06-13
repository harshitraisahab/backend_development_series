const express = require("express");
const usermodel = require("./models/user");

const app = express();
const path = require("path");
const { findSourceMap } = require("module");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
// const usermodel = require("./usermodel.js");

app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.get("/show", async function (req, res) {
  let users = await usermodel.find();
  res.render("show.ejs", { users });
});
app.get("/delete/:id", async function (req, res) {
  await usermodel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/show");
});
app.get("/edit/:id", async function (req, res) {
  let user = await usermodel.findOne({ _id: req.params.id });
  res.render("./edit.ejs", { user });
});
app.post("/update/:id", async function (req, res) {
  let { name, imageurl, email } = req.body;
  let user = await usermodel.findOneAndUpdate({ _id: req.params.id }, { imageurl, name, email }, { new: true });
  res.redirect("/show");
});
app.post("/create", async function (req, res) {
  let { name, imageurl, email } = req.body;
  let createduser = await usermodel.create({
    name: name,
    email: email,
    imageurl,
  });
  res.redirect("/show");
});
app.listen(3000);
