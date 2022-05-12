import logo from './logo.svg';
import './App.css';

const commit = ['Wake up five minutes earlier', '20 minutes of physical activity', 'Cold shower', 'healthy breakfast', 'meditate', 'read about personal development']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { commit.map((toDo) => Task(toDo)) }
      </header>
    </div>
  );
}

export default App;
// export default Task;