const models = require('../models');
const Users = models.users;
const Op = models.Op;
const shortid = require('shortid');

const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
// const cookieParser = require('cookie-parser');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const app = express();

require('dotenv').config();
// app.use(cookieParser());

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async function (email, password, done, err) {
    if (email === '' || password === '') {
      return done(null, false, {
        message: 'Email or password is empty'
      });
    } else if (err) {
      return done(err);
    }
    const user = await Users.findOne({
      where: {
        email: email // email found
      }
    });
    if (!user) {
      return done(null, false, {
        message: 'Incorrect username or password'
      });
    } else if (await bcrypt.compare(password, user.password)) {
      return done(null, user);
    } else {
      return done(null, false, {
        message: 'Incorrect username or password'
      });
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  Users.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err, null);
    });
});

exports.getAllUsers = (req, res) => {
  Users.findAll()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};


exports.login = async (req, res) => {
  console.log(req.user.id);
  res.send(JSON.stringify(req.body));
};

exports.logout = (req, res) => {
  req.logout();
  res.status(200).status({ status: 'Logout Success' });
}

exports.isLogined = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.status(401).send({
      error: 'User is not authenticated'
    });
  }
}

// id and password 
exports.signup = async (req, res) => {
  const body = req.body;
  if (!(body.username || body.full_name || body.age || body.email || body.password || body.country)) {
    return res.status(400).json({
      error: 'Missing required fields'
    });
  }
  if (body.password.length < 8) {
    return res.status(400).json({
      error: 'Password must be at least 8 characters long'
    });
  }
  const salt = await bcrypt.genSalt(10);
  const passwd = await bcrypt.hash(body.password, salt);

  const user = {
    username: body.username,
    full_name: body.full_name,
    age: body.age,
    email: body.email,
    password: passwd,
    company: body.company,
    country: body.country,
    created_at: new Date(),
  };

  Users.create(user)
    .then(user => {
      res.status(200).send({
        status: 'success'
      });
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
  res.send("Secure response from" + JSON.stringify(req.body));
};

exports.googleCallback = (req, res) => {
  passport.authenticate('google', {
    session: true,
  });
  res.send("Secure response from" + JSON.stringify(req.body));
};