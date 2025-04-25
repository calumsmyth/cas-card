import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MyRoutes from './components/routing/MyRoutes'
import Hero from '../src/components/Hero';
import Footer from './components/Footer';
import NavBar from './components/routing/NavBar'
import HeroTitle from './components/HeroTitle'
import HamburgerMenu from './components/HamburgerMenu'
import './index.css'



function App() {
  return (
    <Router>
      <MyRoutes />
    </Router>
  );
}

export default App;
