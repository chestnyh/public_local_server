const http = require("http");
const ngrok = require("ngrok");

const PORT = 3000;

(async function () {
  console.log("Public Address:");
  console.log(await ngrok.connect({ addr: PORT }));
})();

http
  .createServer(function (req, res) {
    req.body = "";
    req.setEncoding("utf8");
    req.on("data", function (chunk) {
      req.body += chunk;
    });
    req.on("end", function () {
        console.log("Received body:")
      console.log("body =", req.body);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("okay");
    });
  })
  .listen(PORT, "127.0.0.1");