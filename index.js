const json_server = require("json-server");
const server = json_server.create();

const cors = require("cors");
server.use(cors());

const middleware = json_server.defaults();
server.use(middleware);

const router = json_server.router("db.json");
server.use(router);

const PORT = 8001;
server.listen(PORT, () => {
  console.log("Server Started");
});
