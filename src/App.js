//import logo from './logo.svg';
import Hello from './Hello.js';
//import Car from './Car.svg';
import Car from "./Car.js";
import './App.css';
import './Car_animation.css'
import IconButton from "./Icon-button.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Car />
        <Hello />
        <p>By 22300348 Bae Hyunjae</p>
        <IconButton/>
      </header>
    </div>
  );
}

export default App;
