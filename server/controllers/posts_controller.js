const models = require('../models');
const Posts = models.posts;
const { Op } = require('sequelize');
const shortid = require('shortid');

const uploadFile = require('./files_controller');

exports.getAllPosts = (req, res) => {
  Posts.findAll()
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
};

exports.createPost = (req, res) => {
  if (!check(req.body).isJSON()) {
    return res.status(400).json({
      message: 'Invalid JSON'
    });
  }
  if (!req.body.title || !req.body.text) {
    res.status(400).send({
      message: "Contents can not be empty!"
    });
    return;
  }
  const postid = shortid.generate();
  const imagePath = uploadFile.image(req);
  const moviePath = req.body.movie;

  const post = {
    id: postid,
    user_id: req.body.user_id,
    title: req.body.title,
    body: req.body.text,
    image: imagePath,
    movie: moviePath,
    created_at: new Date(),
  };
  // mysql上のカラムと連動している

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
};

exports.updatePost = (req, res) => {
  const post = {
    id: req.params.id,
    title: req.body.title,
    body: req.body.text,
    image: req.body.image,
    movie: req.body.movie,
    update_at: new Date(),
  };

  Posts.update(post, {
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

  Posts.destroy({
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

// postsのみの検索である為、別でusersも含めた検索を実装する予定あり
exports.searchbyword = (req, res) => {
  const word = req.query.word; // サニタイズはされていたが明示的にはしていないので注意
  Posts.findAll({
    where: {
      title: {
        [Op.like]: '%' + word + '%'
      }
    }
  })
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

exports.getAllLikesByPostId = (req, res) => {
}

exports.getLikesCountByPostId = (req, res) => {
}

exports.createLike = (req, res) => {
};

exports.deleteLike = (req, res) => {
}