//import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Introduction from './Introduction';
import Features from './Features';
 import './styles.css';
import logo from "./logo192.png";
const App=()=>{
  return(
    <>
    <Navbar />
    <Introduction />
    <Features />
</>
  )
}


ReactDOM.render(
    <>
    
    <App />
    </>,
     document.getElementById('root')
)