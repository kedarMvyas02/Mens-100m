const express = require("express");
require("./src/db/connect");
const router = require("./src/routers/router");
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`We are live on port: ${PORT}`);
});
