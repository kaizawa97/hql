const models = require('../models');
const Posts = models.posts;
const { Op } = require('sequelize');
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
  const postId = req.params.id;

  Posts.findAll({
    where: {
      id: postId
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving post with id=" + postId
      });
    });
};

exports.createPost = (req, res) => {
  const Body = req.body;
  const imagePath = Body.image;
  const moviePath = Body.movie;

  // if (!check(req.body).isJSON()) {
  //   return res.status(400).json({
  //     message: 'Invalid JSON'
  //   });
  // }
  if (!Body.text && !imagePath && !moviePath) {
    return res.status(400).send({
      message: "Contents can not be empty!"
    });
  }

  const post = {
    user_id: Body.user_id,
    body: Body.text,
    image: imagePath,
    movie: moviePath,
    created_at: new Date()
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
  const Body = req.body;
  const imagePath = Body.image;
  const moviePath = Body.movie;
  const postId = req.params.id;
  
  const post = {
    body: Body.text,
    image: imagePath,
    movie: moviePath,
    update_at: new Date()
  };
  
  if (!Body.text && !imagePath && !moviePath) {
    res.status(400).send({
      message: 'Content cannot be empty',
    });
  }

  Posts.update(post, {
    where: { id: postId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Post with id=${postId}. Maybe Post was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Post with id=" + postId
      });
    });
};

exports.deletePost = (req, res) => {
  const postId = req.params.id;

  Posts.destroy({
    where: { id: postId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Post with id=${postId}. Maybe Post was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Post with id=" + postId
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