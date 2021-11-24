import logo from './logo.svg';
import './App.css';

import CounterTwo from './components/reducerhook/CounterTwo';
import CounterThree from './components/reducerhook/CounterThree';
import CompA from './components/contextNreducer/CompA';
import CompB from './components/contextNreducer/CompB';
import CompC from './components/contextNreducer/CompC';
import DataFectching from './components/useReducercases/DataFectching';
import DataFetchingTwo from './components/useReducercases/DataFetchingTwo';


function App() {
  return (

    <div className="App">
     <DataFectching/>
    </div>

  );
}

export default App;