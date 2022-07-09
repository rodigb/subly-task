import React from 'react';
import {Card} from './components/cards'

import './App.css';

fetch('https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b')
  .then(response => response.json())
  .then(data => console.log(data));

const App: React.FC = () => {
  return(
    <div className="App">
      <header className = "App-header">
        <h1>Subly Cards!</h1>
        <Card coverImage="hello" title="hello" status = "hello"></Card>
        <Card coverImage="hello" title="hello" status = "hello"></Card>
        <Card coverImage="hello" title="hello" status = "hello"></Card>
      </header>
    </div>
  )
};

export default App