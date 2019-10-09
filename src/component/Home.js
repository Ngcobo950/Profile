import React from 'react';
import Navbar from './Navbar.js';
import Musa from './images/Musa.jpg';


//creating the function that will have a div with inside the div will have sidebar, header and the img.
function App() {
  return (
    <div className="App">
      <div id="side">
      	<Navbar/>
      	<img src={Musa} alt="Musa" id="pic"/>
      </div>
    </div>
  );
}

export default App;