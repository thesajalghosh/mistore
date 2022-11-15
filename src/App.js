import React from 'react'
import PreNavBar from './components/PreNavBar';
import Slider from './components/Slider';
import './App.css'
import NavBar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
import SliderBelow from './components/SliderBelow';
import StartOffer from './components/StartOffer';
import StarProduct from './components/StarProduct';
import HotMenu from './components/HotMenu';

import MainProduct from './components/MainProduct';
import Video from './components/Video';
import Presscomp from './components/Presscomp';
import Stripe from './components/Stripe'

const App = () => {
  return (
    <Router>
      <PreNavBar/>
      <NavBar/>
      <Slider/>
      <SliderBelow/>
      <StartOffer name="STAR PRODUCTS"/>
      <StarProduct/>
      <StartOffer name="HOT ACCESSORIES"/>
      <HotMenu/>
      <StartOffer name="PRODUCT REVIEWS"/>
      <MainProduct/>
      <StartOffer name="VIDEOS"/>
      <Video/>
      <StartOffer name="IN THE PRESS"/>
      <Presscomp/>
      <Stripe/>
      <StartOffer name="IN THE PRESS"/>
      <StartOffer name="IN THE PRESS"/>
      <StartOffer name="IN THE PRESS"/>
      

    </Router>
  )
}

export default App
