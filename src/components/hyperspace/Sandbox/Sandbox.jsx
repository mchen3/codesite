import React, { Component } from 'react';
import './Sandbox.css';

class Sandbox extends Component {
  render() {
    return (
      <div>

	<body class="is-preload">

      <section id="sidebar">
				<div class="inner">
					<nav>
						<ul>
							<li><a href="#intro">Welcome11</a></li>
							<li><a href="#one">Who we are</a></li>
							<li><a href="#two">What we do</a></li>
							<li><a href="#three">Get in touch</a></li>
						</ul>
					</nav>
				</div>
			</section>


<div className="bottomMenu">

      <h1> Content</h1>

</div>



	</body>

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
