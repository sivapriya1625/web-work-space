import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Message from './components/Message';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">


      <Counter />

      <Message />

      <Greet name="priya" college="IIT">
        <p>this is children property </p>
      </Greet>
      <Greet name="shiva" college="Oxford">
        <button>cklick me</button>
      </Greet>
      <Greet />

      <Welcome name="shivswetha" alias="priya" />

    </div>
  );
}

export default App;
