import logo from './logo.svg';
import './App.css';
import Counter from './setState/Counter';
import CounterWithPrevState from './setState/CounterWithPrevState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Learning ReactJs Fundamentals..!
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

      {/* Counter Component */}
      <Counter />

      <hr />
      
      {/* Counter with PrevState */}
      <CounterWithPrevState />
 
    </div>
  );
}

export default App;
