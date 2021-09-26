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
import Form from 'react-bootstrap/Form'
import { v4 as uuidv4 } from 'uuid';

function App() {

const [list, setList] = useState(data);
const [name, setName] = useState('');
const [priority, setPriority] = useState('medium');

function handleAdd() {
    const newList = list.concat({ name, priority, id: uuidv4() });
    setList(newList);
}

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
                <Form>
                  <Row className="mb-4">
                    <Col s="auto">
                      <Form.Control type="text" placeholder="add a task" onChange={(event) => setName(event.target.value)} />
                    </Col>
                    <Col s="auto">
                    <Form.Control type="text" placeholder="task priority" value={priority}  onChange={(event) => setPriority(event.target.value)} />
                    </Col>
                    <Col xs="auto">
                    <Button variant="primary" onClick={handleAdd}>Add Task</Button>
                    </Col>
                  </Row>
                </Form>
                    
                <Card.Text>
                <Reminder tasks={list}/>
                </Card.Text>
              </Card.Body>
              <Button variant="outline-light" className='mb-4' onClick={()=> setList([])}>Clear Tasks</Button>
            </Card>
        </Col>
        <Col></Col>
        </Row>
  </Container>
    

      

    
    </>
  );
}

export default App;