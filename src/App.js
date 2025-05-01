import logo from "./logo.svg";
import "./App.css";
import UserList from "./method-as-props/UserList";

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

      {/* Method as props */}
      <div className="App-content">
        <h1>Method as Props</h1>
        <p>
          In React, you can pass methods as props to child components. This
          allows child components to call functions defined in their parent
          component.
        </p>
        <p>
          For example, you can pass a method from a parent component to a child
          component, and the child component can invoke that method when needed.
        </p>
      </div>

      <UserList />
    </div>
  );
}

export default App;
