import React, {useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export const Number180 = () => {
    const [printNumber, setPrintNumber] = useState([0,0,0,0,0])
    const [printAnswer, setPrintAnswer] = useState([0,0])
    const [intervalNumberValue, setIntervalNumberValue] = useState(0)
    const [intervalAnswerValue, setIntervalAnswerValue] = useState(0)
    const [isRandom, setIsRandom] = useState(false)

    const startNumber =() => {
        setIntervalNumberValue(
            setInterval(() => 
            setPrintNumber(
                item => 
                [...item].map(el => 
                    el = randomIntFromInterval(0, 9)
                )
                )             
                , 75
            )
        )
        setIsRandom(true)
    }

    const startAnswer =() => {
        setIntervalAnswerValue(
            setInterval(() => 
            setPrintAnswer(
                item => 
                [...item].map(el => 
                    el = randomIntFromInterval(0, 9)
                )
                )             
                , 75
            )
        )
        setIsRandom(true)
    }

    const stopNumber =() => {
        setIntervalNumberValue(
            clearInterval(intervalNumberValue)
            )
   
    }
    const stopAnswer =() => {
        setIntervalAnswerValue(
            clearInterval(intervalAnswerValue)
            )
   
    }

    const onReset =()=>{
        setPrintNumber([0,0,0,0,0])
        setPrintAnswer([0,0])
        setIsRandom(false)
    }

    const randomIntFromInterval=(min, max)=> { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
  return (
    <section className='number text-center' id='number'>
        <Container className='number-containter-180 text-center mb-4'>
            <Row>
                <Col className='num-180' md={3} sm={6}>
                    <h2>{printNumber[0]}</h2> 
                </Col>
                <Col className='num-180' md={3} sm={6}>
                    <h2>{printNumber[1]}</h2>
                </Col>
                <Col className='num-180' md={3} sm={6}>
                    <h2>{printNumber[2]}</h2>
                </Col>
                <Col className='num-180' md={3} sm={6}>
                    <h2>{printNumber[3]}</h2>
                </Col>
                <Col className='num-180' md={3} sm={6}>
                    <h2>{printNumber[4]}</h2>
                </Col>
            </Row>
        </Container>
        <Container className='number-containter-180 text-center mb-3'>
            <Row>
                <Col className='ans-180' md={4} sm={6}>
                    <h2>{printAnswer[0]}</h2> 
                </Col>
                <Col className='ans-180' md={4} sm={6}>
                    <h2>{printAnswer[1]}</h2>
                </Col>
            </Row>
        </Container>
        <Button className='random-btn me-3' size="lg" onClick={startNumber}>Random Number</Button>
        <Button className='random-btn' size="lg" onClick={stopNumber}>Stop Number</Button>
        <br/>
        <Button className='random-btn me-3' size="lg" onClick={startAnswer}>Random Answer</Button>
        <Button className='random-btn' size="lg" onClick={stopAnswer}>Stop Answer</Button>  
        <br/>
        {
             isRandom && <Button className='random-btn' size="lg" onClick={onReset}>Reset</Button>
        }
        
    </section>
  )
}
