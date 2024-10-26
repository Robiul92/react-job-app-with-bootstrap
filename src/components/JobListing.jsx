import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobListing = ({job}) => {
    let description = job.description;
  return (
    <Card className="shadow-md rounded-xl h-100 d-flex flex-column justify-content-between">
      <Card.Body>
        <div className="mb-6">
          <div className="text-muted mb-2">{job.type}</div>
          <Card.Title className="text-xl font-bold">{job.title}</Card.Title>
        </div>

        <Card.Text className="mb-5">{description}</Card.Text>

        {/* <Button 
          variant="link" 
          className="text-indigo-500 mb-5 p-0"
          onClick={() => setFullJobDescription((prevState) => !prevState)}
        >
          {fullJobDescription ? 'Less' : 'More'}
        </Button> */}

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <hr className="mb-5" />

        <Row className="justify-content-between mb-4">
          <Col lg="auto" className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.location}
          </Col>
          <Col lg="auto">
            <Link 
              to={`/jobs/${job.id}`} 
              className="btn btn-primary text-white px-4 py-2 rounded-lg"
            >
              Read More
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default JobListing
