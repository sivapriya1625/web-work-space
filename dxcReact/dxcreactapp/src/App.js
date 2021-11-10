import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'


function App() {
  return (
    <div className="App">
    <Greet name = "priya" college = "IIT">
     <p>this is children property </p>
    </Greet>
    <Greet name = "shiva" college = "Oxford"/>
    <Greet name = "shivswetha"/>
    
     <Welcome/>

    </div>
  );
}

export default App;
