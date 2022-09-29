const express = require("express");
const app = express();

require("dotenv").config({ path: "./config/.env" });
require("./config/connectDB");
//json middelware
app.use(express.json());




var routes = require('./routes/Route'); //importing route
routes(app);

app.listen(process.env.Port, () => {
  console.log(`The Server is Running ${process.env.Port}....`);
});
