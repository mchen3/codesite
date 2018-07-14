import React, { Component } from 'react';
// import './FortyApp.css';

import Menu  from './Menu/Menu';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Sections from './Sections/Sections';
import Contact from './Contact/Contact';

//  import   Menu  from './components/menu/Menu';
// import  { Menu } from 'components/Menu/';


class FortyApp extends Component {
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

export default FortyApp;

