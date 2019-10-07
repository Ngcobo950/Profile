import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Navbar from './Navbar.js';

class CV extends React.Component {
    render() {
        return (
          <div id='lerato'>
            <Navbar/>
            <Row>
              <Card style={{ width: '18rem' }}>
                  <Card.Body>
                  <Card.Title>CV</Card.Title>
                 <Button variant="primary">more</Button>
                </Card.Body>
              </Card>

               <Card style={{ width: '18rem' }}>
                  <Card.Body>
                  <Card.Title>CV</Card.Title>
                 <Button variant="primary">more</Button>
                </Card.Body>
              </Card>
            </Row>

              
      </div>

 
			
        )
    }
}
export default CV;