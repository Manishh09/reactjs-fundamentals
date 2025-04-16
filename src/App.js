import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; // Default Export

// import { Greet } from './components/Greet';
// import MyComponent from './components/Greet';

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
      
      {/* <Greet></Greet> */}

      {/* Self Closing Tag */}
      <Greet/>

      {/* Using Alias to the Component Name */}
      {/* <MyComponent/> */}

      {/* Named Exports */}
      {/* <Greet /> */}
    </div>
  );
}

export default App;
