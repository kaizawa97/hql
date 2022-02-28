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

exports.invite = (req, res) => {
  let inviteflag = false;
  if (req.body.ademail === "admin_hql@gmail.com" && req.body.invite_code === process.env.INVITE_CODE) {
    inviteflag = true;
  }
  const user = {
    auth_flag: inviteflag
  };

  Users.update(user, {
    where: { email: req.body.email }
  })
    .then(user => {
      res.status(200).send({
        message: "Successfully invite"
      });
    })
    .catch(err => {
      res.status(400).send({
        error: err || 'Error creating user'
      });
    });
}