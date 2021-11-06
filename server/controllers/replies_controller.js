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
  const Body = req.body;
  const imagePath = Body.image;
  const moviePath = Body.movie;

  if (!Body.text && !imagePath && !moviePath) {
    res.status(400).send({
      message: 'Content cannot be empty',
    });
  }

  const replies = {
    user_id: Body.user_id,
    post_id: Body.post_id,
    comment_id: Body.comment_id,
    replies_id: Body.replies_id,
    body: Body.body,
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
  const Body = req.body;
  const imagePath = Body.image;
  const moviePath = Body.movie;

  const reply = {
    body: Body.body,
    image: imagePath,
    movie: moviePath,
    updated_at: new Date()
  };

  if (!Body.text && !imagePath && !moviePath) {
    res.status(400).send({
      message: 'Content cannot be empty',
    });
  }

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