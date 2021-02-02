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
cardsRouter.delete('/cards/:_id', validateId, deleteCard);
cardsRouter.put('/cards/:_id/likes', validateId, likeCard);
cardsRouter.delete('/cards/:_id/likes', validateId, dislikeCard);

module.exports = cardsRouter;
