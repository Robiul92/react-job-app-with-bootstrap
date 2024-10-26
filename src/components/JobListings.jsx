import React, { useEffect, useState } from "react";
import JobListing from "./JobListing";
import { Col, Container, Row } from "react-bootstrap";
import Spinners from './Spinners'

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Container>
      <h2 className="my-4">Browse Jobs</h2>
      {loading ? (
        <Spinners loading ={setLoading} />
      ) : (
        <Row>
          {jobs.map((job) => (
            <Col lg={4} md={6} sm={12} key={job.id} className="mb-4">
              <JobListing job={job} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default JobListings;
