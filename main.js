const https = require("https");
const fs = require("fs");

const options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/George_Washington",
  method: "GET",
};

const req = https.request(options, (res) => {
  let responseBody = "";
  console.log("Response started");
  console.log(`Server Status: ${res.statusCode} `);
  console.log("Response Headers: %j", res.headers);
  res.setEncoding("UTF-8");
  
  res.once("data", (chunk) => {
    console.log(chunk);
  });
  
  res.on("data", (chunk) => {
    console.log(`--chunk-- ${chunk.length}`);
    responseBody += chunk;
  });
  
  res.on("end", () => {
    fs.writeFile("gw.html", responseBody, (err) => {
      if (err) throw err;
      console.log("Downloaded file");
    });
  });
});

req.on("error", (err) => {
  console.log("Request problem", err);
});

req.end();
// const spawn = require("child_process").spawn;
//
// const cp = spawn("node", ["counting"]);
//
// cp.stdout.on("data", (data) => {
//   console.log(data.toString());
// });
//
// cp.on("close", () => {
//   console.log("process ended");
//   process.exit();
// });
//
// setTimeout(() => {
//   cp.stdin.write("dg");
// }, 4000);
