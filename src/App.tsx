import React from 'react';
import {Card} from './components/cards'
import errorImg from './images/error.png'
import {TranscribingCard} from './components/transcribingCard'

import './App.css';

let opt:string;
 

const App: React.FC = () => {



  function dropValue(){ //function to get the value of the dropdown option
    var dropdownID = (document.getElementById("dropdown") as HTMLSelectElement)
    var select = dropdownID.selectedIndex;
    opt = dropdownID.options[select].value;
    console.log(opt)

    if(opt.includes("any")){
      console.log("any selected")


    }
    if(opt.includes("en")){
      console.log("en selected")


    }
    if(opt.includes("nl")){
      console.log("nl selected")


    }
    if(opt.includes("cz")){
      console.log("cz selected")

      
    }
  }


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
        </header>
        <body>
          <select id='dropdown' onChange={dropValue}>
            <option id = 'option' value ='any'>Any</option>
            <option id = 'option' value ='en'>EN</option>
            <option id ='option' value='nl'>NL</option>
            <option id = 'option' value='cz'>CZ</option>
            </select>
        {value.map((values)=>{


          //declaring variables for values from value.map(api results)
          var cover = values.cover
          var title = values.name
          var status = values.status
          var languages = values.languages
 


          if(status == "error" || null){ //action for cards with errors
            cover = errorImg
            languages = values.errorMessage

          }

          if (status == "transcribing"){
              return(<TranscribingCard coverImage={cover} title={values.name} status ={values.status} lastUpdated = ""/>) //if transcribing return the transcribing card.
          }

          return(

            <Card coverImage={cover} title={values.name} status ={values.status} lastUpdated = "" languages={languages+" " }></Card> //get's the card component and fills them with the api results.
          )
        })}
        </body>

      
    </div>
  )
};

export default App