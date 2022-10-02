'use strict';

// create App function
    module.exports = function(app) {
        var todoList = require('../controllers/controller');

// todoList Routes

// get and post request for /todos endpoints
        app
        .route("/users")
        .get(todoList.listUsers)
        .post(todoList.createUser);

// put and delete request for /todos endpoints
        app
        .route("/user/:id")
        .put(todoList.updateUser)
        .delete(todoList.deleteUser);
    };