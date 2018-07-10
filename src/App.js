import React, { Component } from 'react';
// import './App.css';
// import './assets/css/main.css';

import  { Header } from './components/Header';
import  { Menu } from './components/Menu';
import  { Banner } from './components/Banner';
import  { Footer } from './components/Footer';
import  { Sections } from './components/Sections';
import  { Contact } from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <div id="wrapper">
          <Banner/>
          <Sections/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;

