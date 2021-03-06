const express = require("express");
const routes = require("./routes");
require("./database"); // informando que ta conectado

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333, () => {
  console.log("server is running on port 3333");
});
