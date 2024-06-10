// express js is a framework -> flow manage everything accept request and give response
const express = require("express");
const app = express();

app.use(function(req,res,next)){
  console.log("middleware");
  next();
}
app.get("/pro", function (req, res) {
  res.send("sdnas");
});
app.listen(300);
