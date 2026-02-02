import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

import { HeaderComponent } from "./Components/HeaderComponent";
import FooterComponent  from "./Components/FooterComponent";
import ContentComponent from "./Components/ContentComponent";
import { MapDemo1 } from './Components/MapDemo1';
import { MapDemo2 } from './Components/MapDemo2';
import { MapDemo3 } from './Components/MapDemo3';
import { MapDemo4 } from './Components/MapDemo4';
import { MapDemo5 } from './Components/MapDemo5';

function App() {


  return (
    <>
      <HeaderComponent></HeaderComponent>
      
      <MapDemo5></MapDemo5>
    
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
