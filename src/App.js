import React, { useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [title]= useState('Breaking Bad!');
   let[data, setData]= useState([]);
  let [apiLoaded, setApiLoaded]= useState(false)

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then((response) => response.json())
      .then(data => {setData(data)
                    setApiLoaded(true)})
  }, []);

  const showSurviovers = () => {
    let Surviovers = data.filter(character => character.status != 'Deceased')
    setData(Surviovers)
  }

  return (
    <div className="App">
    <Header title={title} />
    {
      apiLoaded
      ?  <List showSurviovers ={showSurviovers} characters={data}/> :
         <h3>Loading ... </h3>
    }
    
    </div>
  );
}

export default App;
