const mongoose = require("mongoose");

function connectDB() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose
    .connect("mongodb://127.0.0.1:27017/Users", opts)
    .then(() => console.log("database Connected succesfully"))
    .catch((err) => console.log(err));
}

module.exports = connectDB();
