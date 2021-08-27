'use strict';

const express = require('express');
const router = express.Router();

const users_controller = require('../controllers/users_controller.js');
const posts_controller = require('../controllers/posts_controller.js');
const comments_controller = require('../controllers/comments_controller.js');
const files_controller = require('../controllers/files_controller.js');
const auth_controller = require('../controllers/auth_controller.js');

// home router
// router.get('/', posts_controller.index);

// profile router
// router.get('/profile/:name(\\w+)', users_controller.getProfile);
// router.get('/profile/:name(\\w+)/posts', users_controller.getAllPostsByName);
// router.get('/profile/:name(\\w+)/posts/:id(\\d+)', users_controller.getPostById);
// router.get('/profile/:name(\\w+)/posts/:id(\\d+)/comments', users_controller.getAllCommentsByPostId);
// router.get('/profile/:name(\\w+)/posts/:id(\\d+)/comments/:id(\\d+)', users_controller.getCommentById);
// router.put('/profile/:name(\\w+)', users_controller.updateProfile);
// router.delete('/profile/:name(\\w+)', users_controller.deleteProfile);

// user auth router
// router.post('/auth/login', auth_controller.login);
// router.get('/auth/logout', auth_controller.logout);
// router.post('/auth/register', auth_controller.register);

// OAuth2 router
// router.get('/auth/google',auth_controller.google);
// router.get('/auth/google/callback',auth_controller.googleCallback);

// // users router
// router.get('/users', controller.getAllUsers);
// router.get('/users/:name(\\w+)', controller.getUserByName);

// // search router
// router.get('/search:search_word(\\w+)', controller.search);

// posts router
router.get('/posts', posts_controller.getAllPosts);
router.get('/posts/:id(\\d+)', posts_controller.getPostById);
// router.get('/posts/:id(\\d+)/likes',posts_controller.getAllLikesByPostId);
// router.get('/posts/:id(\\d+)/likescount',posts_controller.getLikesCountByPostId);
router.post('/posts', posts_controller.createPost);
// router.post('/posts/:id(\\d+)/likes',posts_controller.createLike);
router.put('/posts/:id(\\d+)', posts_controller.updatePost);
router.delete('/posts/:id(\\d+)', posts_controller.deletePost);
// router.delete('/posts/:id(\\d+)/likes/:likeId(\\d+)',posts_controller.deleteLike);

// comments router
router.get('/posts/:id(\\d+)/comments', comments_controller.getAllCommentsByPostId);
router.get('/posts/:id(\\d+)/comments/:commentId(\\d+)', comments_controller.getCommentByPostId);
router.get('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies', comments_controller.getAllRepliesByCommentId);
router.get('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies/:replyId(\\d+)', comments_controller.getReplyByCommentId);
router.post('/posts/:id(\\d+)/comments', comments_controller.createComment);
router.post('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies', comments_controller.createReply);
router.delete('/posts/:id(\\d+)/comments/:commentId(\\d+)', comments_controller.deleteComment);
router.delete('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies/:replyId(\\d+)', comments_controller.deleteReply);


// // images and movies router
// router.get('/images:id(\\d+)', controller.getImageById);
// router.get('/movies:id(\\d+)', controller.getMovieById);
router.post('/images', files_controller.createImage);
// router.post('/movies', controller.createMovie);
// router.put('/images/:id(\\d+)', controller.updateImage);
// router.put('/movies/:id(\\d+)', controller.updateMovie);
// router.delete('/images/:id(\\d+)', controller.deleteImage);
// router.delete('/movies/:id(\\d+)', controller.deleteMovie);

module.exports = router;