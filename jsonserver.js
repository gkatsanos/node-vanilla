const http = require("http");
const fs = require("fs");
const path = require("path");
const data = require("./data/data");

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/json"});
  res.end(JSON.stringify(data));
  
}).listen(3000);

console.log("Server Running on port 3000");
