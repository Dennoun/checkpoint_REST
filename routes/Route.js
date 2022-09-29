"use strict";

module.exports = function (app) {
  var user = require("../controllers/controller");

  app.route("/users").get(user.listUsers).post(user.createUser);

  app.route("/users/:id").put(user.updateUser).delete(user.deleteUser);
};
