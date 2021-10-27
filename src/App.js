import React from 'react';
import Header from "./components/Header";
import './App.css';
import Alphabetical from './components/Alphabetical';


function App() {
  return (
      <div className="App">
      <Header />  
      Drinks Ahoy!!
      <Alphabetical />
      </div>
    );
  }
  

export default App;
