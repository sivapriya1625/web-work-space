import { render, screen } from '@testing-library/react';
import App from './App';
function App() {
  return (
    <div className="App"><Stylesheet  enabled = {false}/>
    <Table/>
    <NameList/>
    <UserGreeting/></div>
  )
}

