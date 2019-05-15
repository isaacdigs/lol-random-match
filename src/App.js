import React from 'react';
import './App.css';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Champion from './components/Champion.js';
import Spell from './components/Spell.js'
import Rune from './components/Rune.js'

function App() {
  return (
    <div className="App">
      <Titles />
      <Form />
      <Champion />
      <Spell />
      <Rune />
    </div>
  );
}

export default App;
