const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bowling = require("./bowling");

const app = express();
let games = [];

const setGames = (arr) => (games = JSON.parse(JSON.stringify(arr)));
const getGames = () => games;

app.use(cors());
app.use(bodyParser.json());

app.get("/games", (req, res) => {
  res.send({ games });
});

app.post("/games", (req, res) => {
  games.push(req.body.game);
  res.send({ games: games.reverse() });
});

app.post("/calculate", (req, res) => {
  const scores = [];
  for (let i = 1; i < 11; i++) {
    scores.push(bowling.bowlingScore(req.body.rolls.flat() || [], i));
  }
  res.send({ scores });
});

module.exports.app = app;
module.exports.getGames = getGames;
module.exports.setGames = setGames;
