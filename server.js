const express = require("express");
const app = express();
const  bodyParser = require("body-parser");
// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
// require("dotenv").config({ path: "./config/.env" });
require("./config/connectDB");


// create express app

// define port to run express app
const  port = 3000;





var routes = require('./routes/Route'); //importing route
routes(app);

app.listen(port, () => {
  console.log(`The Server is Running ${port}....`);
});
