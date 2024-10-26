import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeCard = () => {
  return (
    <section className="py-4">
      <Container>
        <Row className="g-4 p-4">
          <Col md={6}>
            <Card className="rounded-lg shadow-sm">
              <Card.Body>
                <Card.Title className="h4 font-weight-bold">For Developers</Card.Title>
                <Card.Text className="mt-2 mb-4">
                  Browse our React jobs and start your career today
                </Card.Text>
                <Button as={Link} to="/jobs" variant="dark" className="rounded-lg">
                  Browse Jobs
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="rounded-lg shadow-sm" style={{ backgroundColor: '#E0E7FF' }}>
              <Card.Body>
                <Card.Title className="h4 font-weight-bold">For Employers</Card.Title>
                <Card.Text className="mt-2 mb-4">
                  List your job to find the perfect developer for the role
                </Card.Text>
                <Button as={Link} to="/add-job" variant="primary" className="rounded-lg">
                  Add Job
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  
  )
}

export default HomeCard
