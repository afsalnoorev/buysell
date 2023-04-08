import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer id="footer">
      <Container >
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Team CSE 2K23
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
