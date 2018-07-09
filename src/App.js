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


// <div classNameName="App">
//         <header classNameName="App-header">
//           <h1 classNameName="App-title">Welcome to React</h1>
//         </header>
//         <p classNameName="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>



// <div classNameName="container">
//     <div classNameName="row">
//       <div classNameName="col-sm">
//         One of threefsdfsd columns
//       </div>
//       <div classNameName="col-sm">
//         One of three columns
//       </div>
//       <div classNameName="testDiv">
//         One of three columns
//       </div>

//       <h1> <div classNameName="col-sm">Testing </div> </h1>
//       <h2> 2nd element </h2>

//     </div>
//     </div>
//       </div>


