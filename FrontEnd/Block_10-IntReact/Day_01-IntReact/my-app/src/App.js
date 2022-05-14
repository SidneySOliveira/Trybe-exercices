import logo from './logo.svg';
import './App.css';
// import React from 'react';
// import ReactDOM from 'react-dom';

const textJSX = "Hello, JSX!"

function App() {
  const element = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <main>
        <h1> { textJSX }</h1>
        <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
      </main>
      </header>
    </div>
  );
  // ReactDOM.render(element, element2);
  return element
  
  // return element
}



export default App;