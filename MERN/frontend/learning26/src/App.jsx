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
import { MapDemo6 } from './Components/MapDemo6';
import { MapDemo7 } from './Components/MapDemo7';
import { MapDemo8 } from './Components/MapDemo8';
import { MapDemo9 } from './Components/MapDemo9';

import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { NetflixHome } from './Components/NetflixHome';
import { NetflisNews } from './Components/Netflisnews';
import { NetflixMovies } from './Components/NetflixMovies';
import { NetflixShows } from './Components/NetflixShows';
import { HomeComponent } from './Components/HomeComponent';
import { IplTeam } from './Components/IplTeam';
import {ErrorNotFound} from'./Components/ErrorNotFound';









function App() {


  return (
    <>
      
  <Navbar></Navbar>
   <Routes>
    <Route path='/netflixhome' element={<NetflixHome/>}></Route>
    <Route path='/netflixmovies' element={<NetflixMovies/>}></Route>
    <Route path='/netflixshows' element={<NetflixShows/>}></Route>
    <Route path='/' element={<HomeComponent/>}></Route>
    <Route path='/netflixmovies' element={<NetflixMovies/>}></Route>
    <Route path='/netflixnews'  element={<NetflisNews/>}></Route>
    <Route path='/iplteam' element={<IplTeam/>}></Route>
    <Route path='/*' element={<ErrorNotFound/>}></Route>
   

      </Routes>
    </>
  )
}

export default App
