import React, {useState} from 'react'
import { Container,Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Number} from './components/Number'
import { QuestionLg } from 'react-bootstrap-icons';
import Rule from './components/Rule'


function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='App'>
      <Rule  show={modalShow} onHide={() => setModalShow(false)} />
    <Button variant="primary" className='rule-btn' onClick={() => setModalShow(true)}><QuestionLg className='mb-1'></QuestionLg></Button>
    <section className='content' id='content'>
      <Container className='content-container '>
        <h1 >24 Game</h1>
      </Container>
    </section>
      <Number></Number>
    </div>
  );
}

export default App;
