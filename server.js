const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(`${req.method} request for ${req.url}`);
  
  if (req.url === "/") {
    fs.readFile("./index.html", "UTF-8", (err, html) => {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(html);
    });
  } else if (req.url.match(/.css$/)) {
    const cssPath = path.join(__dirname, '', req.url);
    const fileStream = fs.createReadStream(cssPath, "UTF-8");
    
    res.writeHead(200, {"Content-Type": "text/css"});
    
    fileStream.pipe(res);
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("404 File Not Found");
  }
});

server.listen(3000);

console.log("Server Running");
