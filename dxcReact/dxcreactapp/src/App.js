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


import Table from './components/Table';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'


function App() {
  return (
    <div className="App">
    <h1 className = {styles.success}>success</h1>
    <h1 className = 'error'>error</h1>

    <Inline/>
    <Stylesheet  enabled = {true}/>
    <Table/></div>
   
    )
    }

    