import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <section style={{ backgroundColor: '#4F46E5', padding: '80px 0', marginBottom: '16px' }}>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col lg={8}>
            <h1 className="display-4 font-weight-bold text-white">Become a React Dev</h1>
            <p className="my-4 h4 text-white">
              Find the React job that fits your skills and needs
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
