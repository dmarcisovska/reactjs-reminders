import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import Reminder from './Components/Reminder'
import data from './data'
import Badge from 'react-bootstrap/Badge'
// import Button from 'react-bootstrap/Button'

function App() {
const [tasks, setTasks] = useState(data)
  return (
    <>
      <Container>
        <Row style={{marginTop:'60px'}}>
          <Col></Col>
          <Col md={8}>
            <Card bg='info' text='light' className="mb-2 custom-card p-2 mb-4 text-center">
              <Card.Body>
                <Card.Title> Reminders for Today</Card.Title>
                <hr/>
                <Card.Text>
                <Reminder tasks={tasks}/>
                </Card.Text>
              </Card.Body>
              <Button variant="outline-light" className='mb-4' onClick={()=> setTasks([])}>Clear Tasks</Button>
            </Card>
        </Col>
        <Col></Col>
        </Row>
  </Container>
    

      

    
    </>
  );
}

export default App;
