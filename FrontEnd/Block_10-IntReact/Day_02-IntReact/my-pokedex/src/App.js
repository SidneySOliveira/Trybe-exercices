import React from 'react';
import './App.css';
import pokemons from './data';
import Cards from './Cards'


class App extends React.Component {
  render () {
  return (
    <div className="App">
        <h1> Pokedex </h1>
        <Cards pokemons={pokemons}/>
    </div>
  );
  }
}

export default App;
