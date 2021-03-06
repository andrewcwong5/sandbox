import logo from './logo.svg';
import './App.css';
import './components/Greet';
import Greet from './components/Greet';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <Greet />
      <Navbar />
      {/* <Cards /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
