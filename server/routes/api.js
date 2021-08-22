'use strict';

const express = require('express');
const router = express.Router();
const posts_contoller = require('../contollers/posts_contoller.js');
const profile_contoller = require('../contollers/profile_contoller.js');

// // profile router
// router.get('/profile/:name(\\w+)', profile_contoller.getProfile);
// router.get('/profile/:name(\\w+)/posts', profile_contoller.getAllPostsByName);
// router.get('/profile/:name(\\w+)/posts/:id(\\d+)', profile_contoller.getPostById);
// router.get('/profile/:name(\\w+)/posts/:id(\\d+)/comments', profile_contoller.getAllCommentsByPostId);
// router.get('/profile/:name(\\w+)/posts/:id(\\d+)/comments/:id(\\d+)', profile_contoller.getCommentById);
// router.put('/profile/:name(\\w+)', profile_contoller.updateProfile);
// router.delete('/profile/:name(\\w+)', profile_contoller.deleteProfile);

// // user auth router
// router.post('/auth/login', contoller.login);
// router.post('/auth/register', contoller.register);

// // users router
// router.get('/users', contoller.getAllUsers);
// router.get('/users/:name(\\w+)', contoller.getUserByName);

// // search router
// router.get('/search:search_word(\\w+)', contoller.search);

// posts router
router.get('/posts', posts_contoller.getAllPosts);
router.get('/posts/:id(\\d+)', posts_contoller.getPostById);
// router.get('/posts/:id(\\d+)/comments', posts_contoller.getAllCommentsByPostId);
// router.get('/posts/:id(\\d+)/comments/:commentId(\\d+)', posts_contoller.getCommentByPostId);
// router.get('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies', posts_contoller.getAllRepliesByCommentId);
// router.get('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies/:replyId(\\d+)', posts_contoller.getReplyByCommentId);
// router.get('/posts/:id(\\d+)/likes',posts_contoller.getAllLikesByPostId);
// router.get('/posts/:id(\\d+)/likescount',posts_contoller.getLikesCountByPostId);
router.post('/posts', posts_contoller.createPost);
// router.post('/posts/:id(\\d+)/comments', posts_contoller.createComment);
// router.post('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies', posts_contoller.createReply);
// router.post('/posts/:id(\\d+)/likes',posts_contoller.createLike);
router.put('/posts/:id(\\d+)', posts_contoller.updatePost);
router.delete('/posts/:id(\\d+)', posts_contoller.deletePost);
// router.delete('/posts/:id(\\d+)/comments/:commentId(\\d+)', posts_contoller.deleteComment);
// router.delete('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies/:replyId(\\d+)', posts_contoller.deleteReply);
// router.delete('/posts/:id(\\d+)/likes/:likeId(\\d+)',posts_contoller.deleteLike);

// // images and movies router
// router.get('/posts/:id(\\d+)/images:id(\\d+)', contoller.getImageById);
// router.get('/posts/:id(\\d+)/movies:id(\\d+)', contoller.getMovieById);
// router.post('posts/images', contoller.createImage);
// router.post('posts/movies', contoller.createMovie);
// router.put('posts/images/:id(\\d+)', contoller.updateImage);
// router.put('posts/movies/:id(\\d+)', contoller.updateMovie);
// router.delete('posts/images/:id(\\d+)', contoller.deleteImage);
// router.delete('posts/movies/:id(\\d+)', contoller.deleteMovie);

module.exports = router;