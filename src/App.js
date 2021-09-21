import React, { useState} from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [title]= useState('Breaking Bad!')
  return (
    <div className="App">
    <Header title={title} />
    </div>
  );
}

export default App;
