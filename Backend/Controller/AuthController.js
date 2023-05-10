require('dotenv').config();
const BookStoreUsers = require('../Model/UserModel');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
const createSendToken = (user, res) => {
  const token = signToken(user.id);
  res.cookie('jwt', token, {
    expiresIn: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  });
  user.password = undefined;
  res.status(200).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};
exports.register = async (req, res, next) => {
  const user = await BookStoreUsers.findOne({ email: req.body.email });
  if (user) {
    return next();
  }
  const newUser = await BookStoreUsers.create({
    email: req.body.email,
    password: req.body.password,
    conformPassword: req.body.conformPassword,
  });
  res.status(201).json({
    status: 'success',
    data: {
      newUser,
    },
  });
};
exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await BookStoreUsers.findOne({ email });

  if (!user) {
    console.log('no user found');
  }
  const correct = await user.correctPassword(password, user.password);
  if (!correct) {
    console.log('check password');
  }

  const token = signToken(user.id);

  createSendToken(user, res);
};
exports.protect = async (req, res, next) => {
  console.log(req.headers.token);
  let token;
  if (req.headers.token) {
    token = req.headers.token;
  } else if (req.cookie.jwt) {
    token = req.cookie.jwt;
  }
  if (!token) {
    console.log('no token found');
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  freshUser = await BookStoreUsers.findById(decoded.id);
  if (!freshUser) {
    return next(new AppError('No user Found', 400));
  }
  req.user = freshUser;
  next();
};
