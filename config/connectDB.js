const mongoose = require("mongoose");

function connectDB() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose
    .connect(process.env.MONGO_URL, opts)
    .then(() => console.log("database Connected succesfully"))
    .catch((err) => console.log(err));
}

module.exports = connectDB();
