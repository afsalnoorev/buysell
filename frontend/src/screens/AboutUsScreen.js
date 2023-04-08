import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const AboutUsScreen = () => {
  return (
    <div className='aboutbody'>
      <Row>
        <Col md={3}></Col>
        <Col md={6} className='aboutpage'>
          <h1>-Our Mission-</h1>
          <p>
          Our goal is to create an online marketplace in particular for NITC students where students can buy and sell goods and services easily
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
      <hr></hr>
      <Row>
        <Col md={3}></Col>
        <Col md={6} className='aboutpage1'>
          <h1>-About-</h1>
          <p>
            Designed and developed by:{' '}
            Afsal Noor, Ayush Ranjan,Ankit Shakya,Dinusha P, Durgesh
          </p>
          <h3>Welcome to Buy And Sell@NITC</h3>
          <p>
          We provide a dedicated online marketplace that will ease NITC students to buy or sell used goods and
services such as electronics, books, fashion items, furniture, cycles, and much more. 
Students can buy or sell items they no longer need. By this system NITC has its own
marketplace, where students of NITC can buy, sell, share, and connect with their peers
          </p>
          <h3>Contact Details</h3>
          <i className='fas fa-phone'></i> 9100000000
          <br />
          <i className='fas fa-envelope-square'></i>{' '}
          <a target='_blank' href={`mailto:buyandsellatnitc@gmail.com`}>
          buyandsellatnitc@gmail.com
          </a>
          <br />
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  )
}

export default AboutUsScreen
