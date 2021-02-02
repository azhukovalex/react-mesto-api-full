const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const BadRequestError = require('../errors/bad-req-err');
const ServerError = require('../errors/serv-err');
const NotFoundError = require('../errors/not-found-err');

const { NODE_ENV, JWT_SECRET } = process.env;

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(next);
};

const getProfile = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(new Error('NotValidId'))
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.message === 'NotValidId') {
        throw new NotFoundError('Нет пользователя с таким Id');
      } else if (err.name === 'CastError') {
        throw new BadRequestError('Введены некорректные данные');
      } else {
        throw new ServerError({ message: `Внутренняя ошибка сервера: ${err}` });
      }
    })
    .catch(next);
};

const getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.send(user))
    .catch(next);
};

const createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10) // хешируем пароль
    .then((hash) => User.create({
      email: req.body.email,
      name: req.body.name,
      about: req.body.about,
      avatar: req.body.avatar,
      password: hash,
    }))
    .then((user) => User.find({ _id: user._id }))
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError({ message: `Ошибка при валидации: ${err}` });
      } else {
        throw new ServerError({ message: `Внутренняя ошибка сервера: ${err}` });
      }
    })
    .catch(next);
};

const updateUser = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      name: req.body.name,
      about: req.body.about,
    },
    // Передадим объект опций:
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
    },
  )
    .orFail()
    .then((newUser) => {
      res.status(200).send(newUser);
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        throw new BadRequestError({ message: `Ошибка при валидации: ${err}` });
      } else {
        throw new ServerError({ message: `Внутренняя ошибка сервера: ${err}` });
      }
    });
};

const updateAvatar = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      avatar: req.body.avatar,
    },
    // Передадим объект опций:
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
    },
  )
    .orFail(new Error('ValidationError'))
    .then((newAvatar) => {
      res.status(200).send(newAvatar);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError({ message: `Ошибка при валидации: ${err}` });
      } else {
        throw new ServerError({ message: `Внутренняя ошибка сервера: ${err}` });
      }
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' },
      );
      res
        /* .cookie('jwt', token, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: true,
        }) */
        .send({ token: token.toString() });
    })
    .catch(next);
};

module.exports = {
  getUsers, getProfile, createUser, updateUser, updateAvatar, login, getCurrentUser,
};
