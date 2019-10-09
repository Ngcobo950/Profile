import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import boot from './images/boot.jpg';
import node from './images/node.png';
import python from './images/python.png';
import react from './images/react.png';
import html from './images/html.jpg';
import js from './images/js.jpg';

import Navbar from './Navbar.js';

class About extends React.Component{
	render(){
		return(
			<div id="musa">
			<Navbar/>
			<br/>
			<h4>My name is Musa Ngcobo I have been working as sales administrator for 5 years at Kga life, while I was still there I was also studing Marketing management.I developed strong-problem solving skill and communication
			and meeting deadlines.I am currently a Web engineer student at Life choices(Cogramma) where I am learning about web development and full stack.I am also teaching my self a Data analytics wich is after Life choices course I would enrole it at Udemy.I have long love for Coding since I was still young boy when I used not to stop being playing with gadgets.
			I have learn the below languages :</h4><br/>
				<Row>	
					<Col xs={6} md={3}>
      					<img src={boot} alt="bootstrap" height="120" width="120" />
   					</Col>

   					<Col xs={6} md={3}>
      					<img src={node} alt="node" height="120" width="120" />
   					</Col>

   					<Col xs={6} md={3}>
      					<img src={python} alt="python" height="120" width="120" />
   					</Col>

   					<Col xs={6} md={3}>
      					<img src={react} alt="react" height="120" width="120"/>
   					</Col> 

   					<Col xs={6} md={3}>
      					<img src={html} alt="html" height="120" width="120" />
   					</Col>

   					<Col xs={6} md={3}>
      					<img src={js} alt="js" height="120" width="120" />
   					</Col>
   					
				</Row>

            <h3 id="line">Contacts</h3><br/>
            <div id="font">
              <h5 className="fa fa-lg fa-envelope "> ngcobomusa950@gmail.com</h5><br/>
              <h5 className="fa fa-lg fa-phone "> 0685375246</h5><br/>
              <h5 className="fa fa-lg fa-phone "> 0748131795</h5>
            </div>


			</div>	

		)
	}
}

export default About;