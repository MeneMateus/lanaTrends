import React from 'react';
import './carousel.css'
import { BsTruck, BsCreditCard2Back, BsPhone, BsArrowDownUp, BsWhatsapp } from 'react-icons/bs'
import { Card } from '../../components';

const carousel = () => (
    <div className='lanaTrends__carousel'>
        <video src={require('../../assets/02.mp4')} type="video/mp4" loop autoPlay />
        <div className='lanaTrends__carousel-links_containerA'>
            <p>Cupom 10% OFF <b>PRIMEIRALANA</b></p>
        </div>
        <div className='lanaTrends__carousel-links_containerC'>
           <div className='lanaTrends__containerC-title'><h1>Verão e o volta às aulas</h1></div>
           <div className='lanaTrends__containerC-cards'>
               <Card title='ACESSÓRIOS'></Card>
               <Card title='PARA SE REFRESCAR'></Card>
               <Card title='PARA MONTAR'></Card>
               <Card title='VOLTA ÁS AULAS'></Card>
           </div>
        </div>
        <video src={require('../../assets/03.mp4')} type="video/mp4" loop autoPlay />
    </div>
)

export default carousel;