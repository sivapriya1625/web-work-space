import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Table from './components/Table';
import Stylesheet from './components/Stylesheet';
import { render, screen } from '@testing-library/react';
import App from './App';
import NameList from './components/NameList';
import Table from './components/Table';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';


function App() {
  return (
    <div className="App">
    <Inline/>
    <Stylesheet  enabled = {true}/>
    <Table/>
    <NameList/>
    </div>
  )
}



    