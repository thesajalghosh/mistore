import React from 'react'
import PreNavBar from './components/PreNavBar';
import Slider from './components/Slider';
import './App.css'
import NavBar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
import SliderBelow from './components/SliderBelow';

const App = () => {
  return (
    <Router>
      <PreNavBar/>
      <NavBar/>
      <Slider/>
      <SliderBelow/>
    </Router>
  )
}

export default App
