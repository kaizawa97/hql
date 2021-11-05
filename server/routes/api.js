'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');

const auth_controller = require('../controllers/auth_controller');
const preusers_controller = require('../controllers/preusers_controller');
const posts_controller = require('../controllers/posts_controller');
const comments_controller = require('../controllers/comments_controller');
const replies_controller = require('../controllers/replies_controller');
const likes_controller = require('../controllers/likes_controller');
const files_controller = require('../controllers/files_controller');

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
// router.post('/login',passport.authenticate('local',{
//   failureRedirect: 'login/failed',
//   session: true
// }), auth_controller.login);
router.post('/login',auth_controller.login);
router.get('/login/failed', auth_controller.loginFailed);
router.get('/logout', auth_controller.logout);
router.post('/signup',auth_controller.signup);

// OAuth2 router
router.get('/auth/google',passport.authenticate('google', {
  scope: ['profile', 'email']
}),auth_controller.googleLogin);
router.get('/auth/google/callback',auth_controller.googleCallback);

// // users router
// router.get('/users', users_controller.getAllUsers);
// router.post('/users', users_controller.createUser);
// router.get('/users/:name(\\w+)', controller.getUserByName);

// // search router
router.get('/search', posts_controller.searchbyword);

// posts router
// router.get('/posts', auth_controller.isAuthenticated, posts_controller.getAllPosts);
// router.get('/posts/:id(\\d+)', posts_controller.getPostById); //正規表現でuuidが取得できません
// router.post('/posts', posts_controller.createPost);
// router.put('/posts/:id(\\d+)', posts_controller.updatePost);
// router.delete('/posts/:id(\\d+)', posts_controller.deletePost);
// router.get('/posts/:id(\\d+)/likes',posts_controller.getAllLikesByPostId);
// router.get('/posts/:id(\\d+)/likescount',posts_controller.getLikesCountByPostId);
// router.post('/posts/:id(\\d+)/likes',posts_controller.createLike);
// router.delete('/posts/:id(\\d+)/likes/:likeId(\\d+)',posts_controller.deleteLike);

// comments router
// router.get('/posts/:id(\\d+)/comments', comments_controller.getAllCommentsByPostId);
// router.get('/posts/:id(\\d+)/comments/:commentId(\\d+)', comments_controller.getCommentByPostId);
// router.get('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies', comments_controller.getAllRepliesByCommentId);
// router.get('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies/:replyId(\\d+)', comments_controller.getReplyByCommentId);
// router.post('/posts/:id(\\d+)/comments', comments_controller.createComment);
// router.post('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies', comments_controller.createReply);
// router.delete('/posts/:id(\\d+)/comments/:commentId(\\d+)', comments_controller.deleteComment);
// router.delete('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies/:replyId(\\d+)', comments_controller.deleteReply);


// // images and movies router
// router.get('/images', files_controller.getImageById);
// router.get('/movies:id(\\d+)', controller.getMovieById);
// router.post('/upload', files_controller.image);
// router.post('/movies', controller.createMovie);
// router.put('/images/:id(\\d+)', controller.updateImage);
// router.put('/movies/:id(\\d+)', controller.updateMovie);
// router.delete('/images/:id(\\d+)', controller.deleteImage);
// router.delete('/movies/:id(\\d+)', controller.deleteMovie);

module.exports = router;