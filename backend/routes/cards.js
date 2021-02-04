const cardsRouter = require('express').Router();
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

const {
  validateCard,
  validateId,
} = require('../middlewares/validation');

cardsRouter.get('/cards', getCards);
cardsRouter.post('/cards', validateCard, createCard);
cardsRouter.delete('/cards/:id', validateId, deleteCard);
cardsRouter.put('/cards/likes/:id/', validateId, likeCard);
cardsRouter.delete('/cards/likes/:id', validateId, dislikeCard);

module.exports = cardsRouter;
