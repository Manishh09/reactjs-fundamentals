import logo from './logo.svg';
import './App.css';
import Greet from './destructing-props-state/Greet';
import Hello from './destructing-props-state/Hello';

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

      {/* Greet Component */}
      <Greet name="Bruce" heroName="Batman"/>

      {/* Hello Component */}

      <Hello name="Chris" heroName="Thor"/>
    </div>
  );
}

export default App;
