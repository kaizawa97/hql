const models = require('../models');
const Users = models.users;
const { Op } = require('sequelize');

exports.getAllUsers = (req, res) => {
  Users.findAll()
  .then(users => {
    res.send(users);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving users."
    });
  });
};

exports.createUser = (req, res) => {
  const user = {
    username: req.body.username,
    full_name: req.body.full_name,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password, //bcryptを後ほど実装する
    company: req.body.company,
    country: req.body.country,
    auth_flag: req.body.auth_flag,
    created_at: new Date(),
  };

  Users.create(user)
  .then(user => {
    res.send(user);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the User."
    });
  });
}