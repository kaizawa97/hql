const models = require('../models');
const Users = models.users;
const Op = models.Op;

const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const app = express();

require('dotenv').config();
app.use(cookieParser());

app.use(session({
  secret: 'hello chobbi',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, //7 days
    secure: true,
    httpOnly: true,
    sameSite: true
  }
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user,done){
  console.log('serializeUser');
  done(null,user);
});

passport.deserializeUser(function(user,done){
  console.log('deserializeUser');
  const user = Users.findOne({
    where: {
      username:username
    }
  });
  done(null,user);
});

passport.use(new LocalStrategy({ 
  usernameField: 'email',
  passwordField: 'password'
},
  async function(email, password, done, err) {
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
 passport.authenticate('local',{session: true})
 res.send("Secure response from" + JSON.stringify(req.body));
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
}

// id and password 
exports.signup = async (req, res) => {
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

// google OAuth2.0
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_OAUTH2_CLIENT_ID,
  clientSecret: process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_OAUTH2_CALLBACK_URL,
  passReqToCallback: true
}, function (request, accessToken, refreshToken, profile, done) {
  if (profile) {
    return done(null, profile);
  }
  else {
    return done(null, false);
  }
}));

exports.googleLogin = (req, res) => {
  passport.authenticate('google', {
    scope: ['profile', 'email']
  });
  res.send("Secure response from" + JSON.stringify(req.body));
};

exports.googleCallback = (req, res) => {
  passport.authenticate('google', {
    session: true,
  });
  res.send("Secure response from" + JSON.stringify(req.body));
};

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.redirect('/api/v1/login');
  }
}