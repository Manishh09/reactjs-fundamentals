import logo from "./logo.svg";
import "./App.css";
import Hello from "./props-functional-comp/Hello";
import Greet from "./props-class-comp/Greet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Learning ReactJs Fundamentals..!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Props with Functional Component */}
      <div className="props-functional-comp">
        <h2>Props with Functional Component</h2>
        <p>
          Functional components can accept props and render dynamic content.
        </p>
        {/* Import and use the Hello component here */}
        <Hello name="Bruce" heroName="Batman" />
        <Hello name="Clark" heroName="Superman" />
        <Hello name="Diana" heroName="Wonder Woman" />

        <hr />
        {/* Props with children */}
        <h2>Props with Children</h2>
        <p>Props can also be used to pass children elements to components.</p>
        <Hello name="Bruce" heroName="Batman">
          <h1>Welcome to React</h1>
          <p>This is a child element passed as a prop.</p>
        </Hello>
      </div>

      <hr />
      
      <div>
        <h2>Props with Class Component</h2>
        <p>Class components can accept props and render dynamic content.</p>
        {/* Props in Class Components */}
        <Greet name="Bruce" heroName="Batman" />
      </div>
    </div>
  );
}

export default App;
