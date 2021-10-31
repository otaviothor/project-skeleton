require("dotenv").config();
const express, { json } = require("express");
const { log } = require("mercedlogger");
const cors = require("cors");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(json());
app.use(routes);

app.listen(PORT, () =>
  log.green("SERVER STATUS", `Server runnig on port ${PORT}`)
);