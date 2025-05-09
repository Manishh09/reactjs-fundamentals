import logo from './logo.svg';
import './App.css';
import UserList from './list-rendering-demo2/UserList';
import ListRenderingDemo from './list-rendering/ListRenderingDemo';

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

      {/* List Rendering Demo */}
      <ListRenderingDemo />
      {/* List Rendering Demo using Nested Component */}
      <UserList />
    </div>
  );
}

export default App;
