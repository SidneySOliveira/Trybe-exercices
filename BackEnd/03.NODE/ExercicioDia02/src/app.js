const express = require('express');
const app = express();
const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, './movies.json');
app.use(express.json());

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

app.get('/movies/search', async (req, res) => {
    try{
        const movies = await readFile();
        console.log(movies);
        const { q } = req.query;
        console.log(req.query);


        if (q) {
            const filteredMovies = movies.filter((element) => element.movie.includes(q));
            return res.status(200).json(filteredMovies);
          }
          res.status(200).end();

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.get('/movies', async (req, res) => {
    try {
        const movies = await readFile ();
        res.status(200).json( movies )
    } catch (err) {
        res.status(500).send({ message: err.message });
    }   
});

app.get('/movies/:id', async (req, res) => {
    try{
        const movies = await readFile ();
        const reqId = Number(req.params.id);
        const movie = movies.find(({ id }) => id == reqId)
        res.status(200).json( movie )
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.post('/movies', async (req, res) => {
    try{
        const movies = await readFile ();
        const newMovie = { id: Date.now(), ...req.body};
        const newMovies = JSON.stringify([...movies, newMovie]);

        await fs.writeFile(moviesPath, newMovies);
        res.status(201).json( await readFile () );                                       
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.put('/movies/:id', async (req, res) => {
    try{
        const movies = await readFile ();
        const reqId = Number(req.params.id);    
        const updatedMovieData = req.body;
        const updatedMovie = {id:reqId, ...updatedMovieData};

        const updatedMovies = movies.reduce((movieList, currentMovie) => {
            console.log(currentMovie.id);
            if (currentMovie.id == reqId) return [ ...movieList, updatedMovie];
            return [...movieList, currentMovie];
        }, []);
        await fs.writeFile(moviesPath, JSON.stringify(updatedMovies));
        res.status(200).json( await readFile () );
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.delete('/movies/:id', async (req, res) => {
    try{
        const movies = await readFile ();
        const reqId = Number(req.params.id);

        const newMovies = movies.filter(({ id }) => id !== reqId)
        await fs.writeFile(moviesPath, JSON.stringify(newMovies));
        res.status(204).json( await readFile () );
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = app;