import React,{useState} from 'react'
import { Container,Button } from 'react-bootstrap';
import {Number180} from './Number180'
import { QuestionLg,ArrowLeft } from 'react-bootstrap-icons';
import Rule from './Rule'
import { useNavigate } from "react-router-dom";

export const Game180 = () => {
  const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    return (
      <>
       <Rule show={modalShow} onHide={() => setModalShow(false)} />
      <Button variant="primary" className='back-btn' onClick={() => navigate(-1)} ><ArrowLeft className='mb-1'></ArrowLeft></Button>
      <Button variant="primary" className='rule-btn' onClick={() => setModalShow(true)} ><QuestionLg className='mb-1'></QuestionLg></Button>
      <section className='content' id='content'>
        <Container className='content-container '>
          <h1 >180 IQ</h1>
        </Container>
      </section>
        <Number180></Number180>
      </>
    )
}
