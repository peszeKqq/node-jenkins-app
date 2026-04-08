function add(a, b) {
  return a + b;
}

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello from Jenkins test app!");
});

if (require.main === module) {
  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

module.exports = { add };

