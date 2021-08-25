const models = require('../models');
const Users = models.users;
const Op = models.Op;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

exports.login = (req, res) => {
  if (err) { return next (err); }

};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
}

exports.register = (req, res) => {
}

// const GoogleStrategy = require('passport-google-oauth2').Strategy;
// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// require('dotenv').config();

// // google OAuth2.0
// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: process.env.GOOGLE_CALLBACK_URL,
//   passReqToCallback: true
// }, function (request, accessToken, refreshToken, profile, done) {
//   Users.findOrCreate({ googleId: profile.id},function (err, user) {
//     return done(err, user);
//   });
// }
// ));

// passport.use(new JwtStrategy({
//   jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
//   secretOrKey: process.env.JWT_SECRET,
//   issuer: process.env.JWT_ISSUER,
//   audience: process.env.JWT_AUDIENCE
// }, function (jwtPayload, done) {
//   if (jwtPayload) {
//     return done(null, user, jwtPayload);
//   }
//   else {
//     return done(null, false);
//   }
// }
// ));

// exports.google = (req, res) => {
//   passport.authenticate('google', {
//     scope: ['email', 'profile']
//   }),
//   res.send("Secure response from " + JSON.stringify(req.user));
// };

// exports.googleCallback = (req, res) => {
//   passport.authenticate('google', {
//     successRedirect: '/auth/google/success',
//     failureRedirect: '/auth/google/failure'
//   });
// };

