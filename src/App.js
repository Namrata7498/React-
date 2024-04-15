import React, { useState } from 'react';
import Board from './Tick tac toe/Board';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert'
import {
  BrowserRouter as router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light' )
 const [alert, SetAlert]=useState(null);

 const showAlert=(message, type)=>{
SetAlert({
  msg: message,
  type:type
} 
)

setTimeout(() => {
  SetAlert(null) 
 }, 2000);
 }
 const toggleMode=()=>{
    console.log('toggle');
    if(mode ==='light'){
      setMode ('dark');
      document.body.style.backgroundColor='#38304b';
      showAlert("Dark mode is enabled", "success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled", "primary");
    }
  }
  return (
  //   <div className="App">
  //  {/* <Board /> */}
  //   </div>
    <>
        {/*<div className="App">
        <Board />
         </div> */} 
       <Navbar name="textutils" aboutTxt="abttext" mode={mode} toggleMode={toggleMode}/>
      <Alert  alert={alert} />
         <div className="container my-3" >
        <Textform showAlert={showAlert}  heading="Insert text to analyse" mode={mode}  /> 
        {/* <About /> */}
      </div> 
     </>
 
  );
}

export default App;
