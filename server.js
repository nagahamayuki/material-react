const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.on("request", (req, res) => {
  fs.readFile("./index.html", "utf-8", (err, data) => {
    res.setHeader("Content-type", "text/html");
    res.write(data);
    res.end();
  })
}).listen(1234);
