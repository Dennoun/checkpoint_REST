const User = require("../models/User");



//list users
exports.listUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};


//create user
exports.createUser = (req, res) => {
  const { name, lastName, email, phone } = req.body;
  const newUser = new User({ name, lastName, email, phone });
  newUser
    .save()
    .then((User) => res.send(User))
    .then(() => console.log("user added succesefully" + Date()))
    .catch((err) => res.status(400).send({ msg: "ERROR ADD" }));
};


//update user
exports.updateUser = (req, res) => {
  const id = req.params.userID;
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((User) => {
      if (!User) {
        return res.status(400).send({ msg: "user not found" });
      }
      res.status(200).send(User);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR" }));
};


//delete user
exports.deleteUser = (req, res) => {
  const id = req.params.userID;
  console.log(id);
  User.findByIdAndDelete(id)
    .then((User) => {
      if (!User) {
        return res.status(404).send({ msg: "User Not Found " });
      }
      res.status(200).send({ msg: "User was deleteed" });
    })
    .catch((err) => res.status(400).send({ msg: "ERROR" }));
};
