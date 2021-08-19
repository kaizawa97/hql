const models = require('../models');
const Posts = models.posts;
const Op = models.Op;

console.log(models);
console.log(Posts);

exports.getAllPosts = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Posts.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts."
      });
    });
};

exports.getPostById = (req, res) => {
  const id = req.params.id;

  Posts.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving post with id=" + id
      });
    });
}

exports.getAllCommentsByPostId = (req, res) => {

}

exports.getCommentByPostId = (req, res) => {
}

exports.getAllRepliesByCommentId = (req, res) => {
}

exports.getReplyByCommentId = (req, res) => {
}

exports.getAllLikesByPostId = (req, res) => {
}

exports.getLikesCountByPostId = (req, res) => {
}

exports.createPost = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const post = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    movie: req.body.movie
  };

  Posts.create(post)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Post."
      });
    });
}

exports.createComment = (req, res) => {
}

exports.createReply = (req, res) => {
}

exports.createLike = (req, res) => {
}

exports.updatePost = (req, res) => {
  const id = req.params.id;

  posts.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Post with id=${id}. Maybe Post was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Post with id=" + id
      });
    });
};

exports.deletePost = (req, res) => {
  const id = req.params.id;

  posts.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Post with id=" + id
      });
    });
};
exports.deleteComment = (req, res) => {
}

exports.deleteReply = (req, res) => {
}

exports.deleteLike = (req, res) => {
}