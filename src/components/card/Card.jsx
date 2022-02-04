import React from 'react';
import './card.css'
const roupa = require('../../assets/roupa.jpg')

// import { Container } from './styles';

const Card = (props) => (
    <>
    <div className='lanaTrends__Card'>
    <div className='lanaTrends__Card-content'></div>
    <h1 className='lanaTrends__Card-title'>{props.title}</h1>
    <h2>COMPRE JÁ</h2>
    </div>
    </>
    
)

export default Card;