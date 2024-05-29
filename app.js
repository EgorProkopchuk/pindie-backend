const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const usersRouter = require('./routes/users');
// const gamesRouter = require('./routes/games');
// const categoriesRouter = require('./routes/categories');
const apiRouter = require('./routes/apiRouter');
const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');
const cookieParser = require("cookie-parser");
const pagesRouter = require('./routes/pages');
const app = express();
const PORT = 3001;

connectToDatabase();

// app.js
// Импорты и инициализация приложения

app.use(
  cors,
  cookieParser(), // Добавляем миддлвар для работы с куки
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

// Запуск приложения

app.listen(PORT, ()=>{
    console.log(`listening on port http://localhost:${PORT}`);
});