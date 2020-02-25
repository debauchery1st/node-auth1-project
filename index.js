server = require("./api/server");

port = process.env.PORT;

server.get("/", (req, res) => {
  res.status(200).send("node-auth1-project");
});

server.listen(port, () => {
  console.log(`***listening on port ${port}***`);
});
