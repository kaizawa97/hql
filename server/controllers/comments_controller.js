const models = require('../models');
const Comments = models.comments;
const Op  = models.Op;
const uploadFile = require('./files_controller');

exports.getAllCommentsByPostId = (req, res) => {
  const postId = req.params.postId;

  Comments.findAll({
    where: {
      post_id: postId
    }
  }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving comments.',
      });
    });
};

exports.createComment = (req, res) => {
  const Body = req.body;
  const imagePath = Body.image;
  const moviePath = Body.movie;

  // const imagePath = uploadFile.image(req);

  // if (!check(req.body).isJSON()) {
  //   return res.status(400).json({
  //     message: 'Invalid JSON'
  //   });
  // }
  if (!Body.text && !imagePath && !moviePath) {
    return res.status(400).send({
      message: 'Content cannot be empty',
    });
  }

  const comment = {
    post_id: Body.post_id,
    user_id: Body.user_id,
    body: Body.body,
    image: imagePath,
    movie: moviePath,
    created_at: new Date()
  };

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
};

exports.updateComment = (req, res) => {
  const commentId = req.params.commentId;
  const Body = req.body;
  const imagePath = Body.image;
  const moviePath = Body.movie;

  const comment = {
    body: Body.body,
    image: imagePath,
    movie: moviePath,
    update_at: new Date()
  };
  
  if (!Body.text && !imagePath && !moviePath) {
    res.status(400).send({
      message: 'Content cannot be empty',
    });
  }

  Comments.update(comment, {
    where: {
      id: commentId
    }
  }).then(data => {
    res.send(data);
  }
  ).catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occurred while updating the Comment.',
    });
  }
  );
};


exports.deleteComment = (req, res) => {
  const commentId = req.params.commentId;

  Comments.destroy({
    where: {
      id: commentId
    }
  }).then(data => {
    res.send(data);
  }
  ).catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occurred while deleting the Comment.',
    });
  }
  );
};

