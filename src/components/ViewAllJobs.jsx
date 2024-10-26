import React from 'react'

import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const ViewAllJobs = () => {
  return (
    <Container className="my-4 d-flex justify-content-center">
    <Button
      as={Link}
      to="/jobs"
      className="text-white py-3 px-4 rounded-xl"
      variant="dark"
      size="lg"
      style={{ width: '100%', maxWidth: '400px' }}
    >
      View All Jobs
    </Button>
  </Container>
  )
}

export default ViewAllJobs
