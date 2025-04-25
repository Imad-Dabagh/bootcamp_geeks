// import { useState } from 'react';
import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <>
      <Car model={carinfo.model} />
      <Events />
      <Phone />
      <Color />
    </>
  )
}

export default App
