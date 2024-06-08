// nodejs is a js runtime envirment which allows js to make server
// with the help of js wrapper and chrome v8 engine
{
  // from nodes documentation we learn FileSystem
  // fs node module ki power or code const fs m
  const fs = require("fs");
  // filename,data,callbacks or functions

  fs.writeFile("1.txt", "data inside the file", function (err) {
    if (err) console.error(err);
    else console.log("sd");
  });

  fs.appendFile("1.txt", "+ iske baad ka data", function (err) {
    if (err) console.error(err);
    else console.log("sd");
  });
  fs.rename("1.txt", "new.txt", function (err) {
    if (err) console.error(err);
    else console.log("sd");
  });
  //  copy and unlink also from module
}

///////////////////
// http and https

// http is a protocol or rule which allows us
// to send and recieve anthing from internet , has to follow these rules

const http = require("http");
const server = http.createServer(function (req, res) {
  res.end("new server");
});
server.listen(3000);
