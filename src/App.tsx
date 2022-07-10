import React from 'react';
import {Card} from './components/cards'
import errorImg from './images/error.png'

import './App.css';



const App: React.FC = () => {

  //create a function to fetch the api results and assign them.

  const [value,setValue]= React.useState<any[]>([])
  
  console.log(value)
  React.useEffect(()=>{

    async function fetchResults(){

      const response:(any)= await fetch('https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b')//fetch api url
      const jsonData:(any)= await response.json();
      const mainInfo:(any)= jsonData.media

      setValue(mainInfo)

      // for(let i = 0; mainInfo.length>i;i++){
      //    console.log(mainInfo[i].languages)
      // }

     
    

      }
       
    fetchResults();
  },[])

  



  return(
    <div className="App">
      <header className = "App-header">
        <h1>Subly Cards!</h1>
        {value.map((values)=>{

          var cover = values.cover
          var title = values.name
          var status = values.status
          var languages = values.languages
          console.log(status)

          if(status == "error" || null){
            cover = errorImg
            languages = values.errorMessage
             
          }

          return(

            <Card coverImage={cover} title={values.name} status ={values.status} lastUpdated = "" languages={languages+" " }></Card> //get's the card component and fills them with the api results.
          )
        })}

      </header>
    </div>
  )
};

export default App