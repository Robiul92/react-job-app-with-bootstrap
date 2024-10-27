import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [isExpended, setIsExpended] = useState(false);
  let description = job.description;

  if (!isExpended) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <Card className="shadow-md rounded-xl h-100 d-flex flex-column justify-content-between">
      <Card.Body>
        <div className="mb-5">
          <div className="text-muted mb-2">{job.type}</div>
          <Card.Title className="text-xl font-bold">{job.title}</Card.Title>
        </div>

        <Card.Text className="mb-4">{description}</Card.Text>

        <Button
          variant="link"
          className="text-indigo-500 mb-4 p-0"
          onClick={() => setIsExpended((prevState) => !prevState)}
        >
          {isExpended ? "Less" : "More"}
        </Button>

        <h5 className="text-indigo-500 mb-1">{job.salary} / Year</h5>

        <hr className="mb-4" />

        <Row className="justify-content-between mb-2 align-items-center">
  <Col className="d-flex justify-content-between align-items-center">
    <div className="d-flex align-items-center text-warning text-nowrap">
      <FaMapMarker className="me-1" />
      <span>{job.location}</span>
    </div>
    <Link 
      to={`/jobs/${job.id}`} 
      className="btn btn-primary text-white px-4 py-2 rounded-lg ms-2"
    >
      Read More
    </Link>
  </Col>
</Row>
      </Card.Body>
    </Card>
  );
};

export default JobListing;
