server = require("./api/server");

port = process.env.PORT;

server.listen(port, () => {
  console.log(`***listening on port ${port}***`);
});
