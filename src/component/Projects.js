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
        				<Card style={{ width: '20rem' ,height: '24rem'}}>
						 <Card.Img variant="top" src={weather} alt='weather' />
						  <Card.Body>
						    <Card.Title>Weather</Card.Title>
						     <Button variant="primary" href="https://Ngcobo950.github.io/MusaWeather/" target="_blank">live demo</Button>
						  </Card.Body>
						</Card>
					</div>
				
					<div>
						<Card style={{ width: '20rem' ,height: '24rem' }}>
						  <Card.Img variant="top" src={online} alt='Online' />
						  <Card.Body>
						    <Card.Title>Online store</Card.Title>
						    <Button variant="primary" href="https://ngcobo950.github.io/Musa/" target="_blank" id="button">live demo</Button>
						  </Card.Body>
						</Card>
						</div>
			
						<div>
						<Card style={{ width: '20rem' ,height: '24rem' }}>
						  <Card.Img variant="top" src={snake_game} alt='snake' />
						  <Card.Body>
						    <Card.Title>Snake game</Card.Title>
						    <Button variant="primary" href="https://musa-snake.herokuapp.com/" target="_blank">live demo</Button>
						  </Card.Body>
						</Card>
						</div>
					</Row>	
				</div>


        )
    }
}

export default Projects;
