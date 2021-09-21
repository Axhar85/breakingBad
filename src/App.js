import React, { useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [title]= useState('Breaking Bad!');
  let[data, setData]= useState([]);

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then((response) => response.json())
      .then(data => setData(data))
  }, []);

  return (
    <div className="App">
    <Header title={title} />
    <List characters={data}/>
    </div>
  );
}

export default App;
