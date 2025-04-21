import logo from './logo.svg';
import './App.css';
import Message from './state-in-class-component/Message';

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

      {/* Message Component */}
      {/* Cannot work with Props as the data cannot be changed once set via Props. */}
      {/* Solution here would be the State */}
      
      <Message></Message>
    </div>
  );
}

export default App;
