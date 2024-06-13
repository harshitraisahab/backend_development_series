const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/myapp");
// mongoose.connect("mongodb://127.0.0.1:27017/myapp");

const userschema = mongoose.Schema({
  name: String,
  imageurl: String,
  email: String,
});
module.exports = mongoose.model("user", userschema);
// module.exports=
// create,read,update, find user use internet
