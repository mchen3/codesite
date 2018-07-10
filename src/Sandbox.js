import React, { Component } from 'react';
import './App.css';
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


<div className="dropdown">
  <button onClick={myFunction} className="dropbtn">Dropdown</button>
  <div id="myDropdown" className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

      <h1> Test</h1>

      </div>
    );
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

export default App;



// <Menu/>
// <div id="wrapper">
//   <Banner/>
//   <Sections/>
//   <Contact/>
//   <Footer/>
// </div>
