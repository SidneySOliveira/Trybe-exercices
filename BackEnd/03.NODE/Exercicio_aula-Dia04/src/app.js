// src/app.js

const express = require('express');
const path = require('path');
require('express-async-errors');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
const apiCredentials = require(path.resolve(__dirname, './middlewares/apiCredentials'));
const validateTeam = require(path.resolve(__dirname, './middlewares/validateam'));
const cors = require('cors');

app.use(cors());
app.use(express.static(path.resolve(__dirname, './brasao')));
app.use(express.json());
app.use(apiCredentials);

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

// configura para procurar o path no diretório ./images


const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.some(( t ) => t.id == id );
  if (team) {
    next();
  } else {
    res.sendStatus(404);
  }
};

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.sendStatus(401);
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

app.delete('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

app.use((__req, res) => res.sendStatus(404));

module.exports = app;