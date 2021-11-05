const models = require('../models');
const Preusers = models.preusers;
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
