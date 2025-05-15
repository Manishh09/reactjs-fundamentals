import logo from "./logo.svg";
import "./App.css";
import ListRenderingDemo from "./list-rendering/ListRenderingDemo";
import ProductList from "./list-rendering/with-key-prop/ProductList";
import MovieList from "./list-rendering/index-as-key-antipattern/MovieList";
import UserList from "./list-rendering/without-key-prop/UserList";

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

      {/* List Rendering Demo */}
      <ListRenderingDemo />
      
      {/* List Rendering Demo using Nested Component Without Key Prop */}
      <UserList />

      {/* List Rendering Demo using Nested Component With Key Prop */}
      <ProductList />

      {/* Index as Key Anti-Pattern */}
 
      {/* List Rendering Demo using Nested Component With Key as Index */}
      <MovieList />
    </div>
  );
}

export default App;
