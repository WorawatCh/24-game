import React, {useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'


export const Number = () => {
    const [printNumber, setPrintNumber] = useState([0,0,0,0])
    const [intervalValue, setIntervalValue] = useState(0)
    const [isRandom, setIsRandom] = useState(false)

    const start =() => {
        setIntervalValue(
            setInterval(() => 
            setPrintNumber(
                item => 
                [...item].map(el => 
                    el = randomIntFromInterval(0, 9)
                )
                ), 75
            )
        )
        setIsRandom(true)
    }

    const stop =() => {
        setIntervalValue(
            clearInterval(intervalValue)
            )
   
    }

    const onReset =()=>{
        setPrintNumber([0,0,0,0])
        setIsRandom(false)
    }

    const randomIntFromInterval=(min, max)=> { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
  return (
    <section className='number text-center' id='number'>
        <Container className='number-containter text-center'>
            <Row>
                <Col className='num' md={3} sm={6}>
                    <h2>{printNumber[0]}</h2>
                </Col>
                <Col className='num' md={3} sm={6}>
                    <h2>{printNumber[1]}</h2>
                </Col>
                <Col className='num' md={3} sm={6}>
                    <h2>{printNumber[2]}</h2>
                </Col>
                <Col className='num' md={3} sm={6}>
                    <h2>{printNumber[3]}</h2>
                </Col>
            </Row>
        </Container>
        <Button className='random-btn me-3' size="lg" onClick={start}>Random</Button>
        <Button className='random-btn' size="lg" onClick={stop}>Stop</Button> 
        <br/>
        {
             isRandom && <Button className='random-btn' size="lg" onClick={onReset}>Reset</Button>
        }
        
    </section>
  )
}
