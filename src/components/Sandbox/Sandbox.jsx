import React, { Component } from 'react';
import './Sandbox.css';

class Sandbox extends Component {
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

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

export default Sandbox;



// <Menu/>
// <div id="wrapper">
//   <Banner/>
//   <Sections/>
//   <Contact/>
//   <Footer/>
// </div>
