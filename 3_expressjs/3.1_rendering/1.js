// const cookieParser = require("cookie-parser")

// server bhool jata h baar baar tum kon ho to user ke shaat ek unique String
// saved on frontend which is cookie backend pr session
// mainly used  in authentication for saved login info??

// plain data frontend se blob ke form m unreadable so to become readable we use??

// express js is a framework -> flow manage everything accept request and give response
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

const express = require("express");
const app = express();
//parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//seting ejs
app.set("viewengine", "ejs");
//setting static folders ./ images,javascript, stylesheets
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(function (req, res, next) {
  console.log("middleware");
  next();
});
//rendering using making views folder
app.get("/", function (req, res) {
  res.render("index.ejs");
});

//dynamic routing

app.get("/profile/:kuchv", function (req, res) {
  //  use req.params.kuchv;
  res.send(`welcome, ${req.params.kuchv}`);
});
// dynamic routing with 2 ,3 parameters
app.get("/profile/:username/:age", function (req, res) {
  //  use req.params.kuchv;
  res.send(`hey, ${req.params.username} , your age is ${req.params.age}`);
});
app.listen(300);
