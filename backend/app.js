require('dotenv').config();

const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const usersRoutes = require('./routes/users');
const cardsRouter = require('./routes/cards');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const NotFoundError = require('./errors/not-found-err');
const ServerError = require('./errors/serv-err');
const { validateUser, validateLogin } = require('./middlewares/validation');
const { requestLogger, errorLogger } = require('./middlewares/logger');

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
app.use(
  cors({
    origin: [
      'http://localhost:3001',
      'http://localhost:3000',
      '*',
    ],
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(helmet());
app.use(bodyParser.json());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', validateLogin, login);
app.post('/signup', validateUser, createUser);
app.use(auth);
app.use('/', usersRoutes);
app.use('/', cardsRouter);
app.use(() => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

app.use(errorLogger); // подключаем логгер ошибок

app.use(errors()); // обработчик ошибок celebrate

app.use((err, req, res) => {
  if (err.status) {
    res.status(err.status).send(err.message);
    return;
  }
  throw new ServerError({ message: `На сервере произошла ошибка: ${err.message}` });
});

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
