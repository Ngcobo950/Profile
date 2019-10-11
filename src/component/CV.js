import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Navbar from './Navbar.js';
import cv from './images/cv.jpg'

class CV extends React.Component {
    render() {
        return (
          <div id='lerato'>
            <Navbar/>
            <br/>
            <h3>CV DETAILS AND QUALIFICATIONS</h3>
            <br/>
            <Row>
              <Card style={{ width: '18rem' ,height: '24rem' }}>
                <Card.Img variant="top" src={cv} alt='CV' />
                  <Card.Body>
                  <Card.Title>CV</Card.Title>
                 <Button variant="primary" href="https://ngcobo950.github.io/Online/">more</Button>
                </Card.Body>
              </Card>

               <Card style={{ width: '18rem' ,height: '24rem' }}>
                <Card.Img variant="top" src={cv} alt='CV' />
                  <Card.Body>
                  <Card.Title>QUALIFICATIONS</Card.Title>
                 <Button variant="primary">more</Button>
                </Card.Body>
              </Card>
            </Row>

              
      </div>

 
			
        )
    }
}
export default CV;
