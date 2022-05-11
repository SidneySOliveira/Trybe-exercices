import logo from './logo.svg';
import './App.css';


const Task = (value) => {
  return (
    <li>{value}</li>
    );
  }
  
const tarefas = ['Dormir às 22', 'Acordar às 6h', 'Fazer exercício até às 7h', 'meditar e ler até às 8h']

// const element = Task("Requisito 02")

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>{ tarefas.map(tarefa => Task(tarefa))}</ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pp.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
