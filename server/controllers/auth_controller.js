const models = require('../models');
const Users = models.users;
const Op = models.Op;

const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({ 
  usernameField: 'email',
  passwordField: 'password'
},
  async function(email, password, done) {
    const user = await Users.findOne({
      where: {
        email: email
      }
    });
    if (err) {return done(err);}
    if (!user) {
      return done(null, false);
    }
    if (!await bcrypt.compare(password, user.password)) {
      return done(null, false);
    }
    return done(null, user);
  }
));

exports.login = async (req, res) => {
 passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: false
 })
};


exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
}

exports.signup = async (req, res,next) => {
  const body = req.body;
  if (!(body.username && body.full_name && body.age && body.email && body.password && body.country)) {
    return res.status(400).send({
      error: 'Missing required fields'
    });
  }
  if (body.password.length < 8) {
    return res.status(400).send({
      error: 'Password must be at least 8 characters long'
    });
  }
  const salt = await bcrypt.genSalt(11);
  const passwd = await bcrypt.hash(body.password, salt);

  const user = {
    username: body.username,
    full_name: body.full_name,
    age: body.age,
    email: body.email,
    password: passwd,
    company: req.body.company,
    country: req.body.country,
    auth_flag: req.body.auth_flag,
    created_at: new Date(),
  };

  Users.create(user)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(400).send({
        error: err || 'Error creating user'
      });
    });

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

