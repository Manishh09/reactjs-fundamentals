import logo from './logo.svg';
import './App.css';
import Hello from './jsx/Hello';
import Welcome from './without-jsx/Welcome';

// Its a Functional Component Written in JSX
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

      {/* Hello Component */}
      <Hello />
      {/* Welcome Component */}
      <Welcome />
    </div>
  );
}

export default App;
