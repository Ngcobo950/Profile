import React from 'react';
import Navbar from './Navbar.js';


//creating the function that will have a div with inside the div will have sidebar, header and the img.
function App() {
  return (
    <div className="App">
      <div id="side">
      	<Navbar/>
      </div>
    </div>
  );
}

export default App;