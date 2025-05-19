import logo from './logo.svg';
import './App.css';
import MountingLC from './lifecycle-hooks/1_mounting/MountingLC';
import UpdatingLC from './lifecycle-hooks/2-updating/UpdatingLC';
import LifeCycleMethodsDemo from './lifecycle-hooks/LifeCycleMethodsDemo';

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

      {/* Life Cycle Methods */}
      {/* Mounting Life Cycle Methods */}
      {/* <MountingLC /> */}
      {/* Updating Life Cycle Methods */}
      {/* <UpdatingLC /> */}
      {/* Unmounting Life Cycle Methods */}
      {/* Error Handling Life Cycle Methods */}
      


      {/* Complete Demo */}
      <LifeCycleMethodsDemo />
    </div>
  );
}

export default App;
