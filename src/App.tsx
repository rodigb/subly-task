import React from 'react';
import {Card} from './components/cards'

import './App.css';

var results: any;

const App: React.FC = () => {


  const [value,setValue]=React.useState([]);
  console.log(value)
  React.useEffect(()=>{

    async function fetchResults(){

      const response = await fetch('https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b')//fetch api url
      //console.log(response)
      const jsonData= await response.json();
      //console.log(jsonData.media);

      setValue(jsonData.media)

      }
    fetchResults();
  },[])



  return(
    <div className="App">
      <header className = "App-header">
        <h1>Subly Cards!</h1>
        {value.map((values)=>{
          return(
            <Card coverImage="hello" title="hello" status = "hello"></Card>
          )
        })}
        
 
      </header>
    </div>
  )
};

export default App