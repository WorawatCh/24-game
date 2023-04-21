import React from 'react'
import { Container,Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Menu =()=>{
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(`/${route}`);
  }
  return (
    <section className='menu' id='menu'>
        <Container >
            <h2>Mathematics Games</h2>
            <p>Choose your game</p>
            <Button className='random-btn' size="lg" onClick={() => handleClick('24')}>24 Game</Button>
            <br/>
            <Button className='random-btn' size="lg" onClick={() => handleClick('180')}>180 IQ</Button> 
        </Container>
    </section>
  )
}
export default Menu
