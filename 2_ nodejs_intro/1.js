// nodejs is a js runtime envirment which allows js to make server
// with the help of js wrapper and chrome v8 engine

// from nodes documentation we learn FileSystem
// fs node module ki power or code const fs m
const fs = require("fs");
// filename,data,callbacks or functions

fs.writeFile("1.txt", "data inside the file", function (err) {
  if (err) console.error(err);
  else console.log(errot);
});
