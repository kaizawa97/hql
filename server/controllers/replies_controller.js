const models = require('../models');
const Replies = models.replies;
const { Op } = require('sequelize');
const uploadFile = require('./files_controller');

exports.getAllRepliesByCommentId = (req, res) => {
  const commentId = req.params.commentId;

  Replies.findAll({
    where: {
      comment_id: commentId
    }
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving replies.',
      });
    });
};

exports.createReply = (req, res) => {
  if (!req.body.body) {
    res.status(400).send({
      message: 'Content cannot be empty',
    });
  }
  const imagePath = uploadFile.image(req);
  const moviePath = req.body.movie;

  const replies = {
    user_id: req.body.user_id,
    post_id: req.body.post_id,
    comment_id: req.body.comment_id,
    replies_id: req.body.replies_id,
    body: req.body.body,
    image: imagePath,
    movie: moviePath,
    created_at: new Date()
  };

  Replies.create(replies)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Reply.',
      });
    });
};

exports.updateReply = (req, res) => {
  const replyId = req.params.replyId;
  const imagePath = uploadFile.image(req);
  const moviePath = req.body.movie;

  const reply = {
    body: req.body.body,
    image: imagePath,
    movie: moviePath,
    updated_at: new Date()
  };

  Replies.update(reply, {
    where: {
      id: replyId
    }
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while updating the Reply.',
      });
    });
}

exports.deleteReply = (req, res) => {
  const replyId = req.params.replyId;

  Replies.destroy({
    where: {
      id: replyId
    }
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while deleting the Reply.',
      });
    });
}