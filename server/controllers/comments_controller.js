const models = require('../models');
const Comments = models.comments;
const Op = models.Op;

exports.getAllCommentsByPostId = (req, res) => {
  const postId = req.params.postId;
}

exports.getCommentByPostId = (req, res) => {
}

exports.getAllRepliesByCommentId = (req, res) => {
}

exports.getReplyByCommentId = (req, res) => {
}

exports.createComment = (req, res) => {
  if (!req.body.body) {
    res.status(400).send({
      message: 'Content cannot be empty',
    });
    const comment = {
      post_id: req.body.post_id,
      user_id: req.body.user_id,
      body: req.body.body,
      created_at: new Date()
    };
  }
  Comments.create(comment)
    .then(data => {
      res.send(data);
    }
    ).catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Comment.',
      });
    }
    );
}

exports.createReply = (req, res) => {
  if (!req.body.body) {
    res.status(400).send({
      message: 'Content cannot be empty',
    });
    const reply = {
      comment_id: req.body.comment_id,
      user_id: req.body.user_id,
      body: req.body.body,
      created_at: new Date()
    };
  }
}

exports.deleteComment = (req, res) => {
}

exports.deleteReply = (req, res) => {
}