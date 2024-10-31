import React, { useEffect, useState } from "react";
import JobListing from "./JobListing";
import { Col, Container, Row } from "react-bootstrap";
import Spinners from './Spinners'
import axios from "axios";

const JobListings = ({isHome = false}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobList = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const response = await axios.get(jobList);
        const data = await response.data;
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <Container>
      <h2 className="my-4">
      {isHome ? 'Browse Jobs' : 'Recent Jobs'}
        </h2>
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
