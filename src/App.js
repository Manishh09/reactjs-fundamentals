import logo from './logo.svg';
import './App.css';
import StyleComponent from './styling-react-components/StyleComponent';

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

      {/* Styling */}
      <StyleComponent primary={true}/>
    </div>
  );
}

export default App;
