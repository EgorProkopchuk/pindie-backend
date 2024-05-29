// Файл routes/games.js

const gamesRouter = require('express').Router();

const {findAllGames, createGame, findGameById, updateGame, deleteGame,checkEmptyFields,checkIfUsersAreSafe,checkIfCategoriesAvaliable, checkIsGameExists,checkIsVoteRequest} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameById,sendGameUpdated, sendGameDeleted} = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    createGame,
    sendGameCreated,
    checkAuth
  );
  
  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    sendGameUpdated,
    checkAuth
  ); 
gamesRouter.delete(
    "/games/:id", // Слушаем запросы по эндпоинту
    checkAuth,
    deleteGame,
    sendGameDeleted,
  );
module.exports = gamesRouter;