import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Navbar from './Navbar.js';
import weather from './images/weather.PNG';
import snake_game from './images/snake_game.PNG';
import online from './images/online.PNG'


class Projects extends React.Component {
    render() {
        return (
            <div id='liso'>
        		<Navbar/>
        		<br/>
        		<h3>WELCOME TO MY PROJECTS</h3>
        		<br/>
        		<Row className="row">
        			<div>
        				<Card style={{ width: '18rem' }}>
						 <Card.Img variant="top" src={weather} alt='snake' />
						  <Card.Body>
						    <Card.Title>Weather app</Card.Title>
						     <Button variant="primary">click</Button>
						  </Card.Body>
						</Card>
					</div>
				
					<div>
						<Card style={{ width: '18rem' }}>
						  <Card.Img variant="top" src={snake_game} alt='snake' />
						  <Card.Body>
						    <Card.Title>Snake game</Card.Title>
						    <Button variant="primary">click</Button>
						  </Card.Body>
						</Card>
						</div>
			
						<div>
						<Card style={{ width: '18rem' }}>
						  <Card.Img variant="top" src={online} alt='snake' />
						  <Card.Body>
						    <Card.Title>Online store</Card.Title>
						    <Button variant="primary">click</Button>
						  </Card.Body>
						</Card>
						</div>
					</Row>	
				</div>


        )
    }
}

export default Projects;
