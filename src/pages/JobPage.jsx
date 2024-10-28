import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const JobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState({});

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [id]);

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };
 

  const onDelete =(jobId)=> {
    const confirm = window.confirm("Are you sure you want to delete the Job details")
     if(!confirm) return;
    
    
    deleteJob(jobId);
    return navigate('/jobs')
    }
    

  return (
    <>
      <section>
        <Container className="py-4">
          <Link to="/jobs" className="text-decoration-none d-flex align-items-center text-primary">
            <FaArrowLeft className="me-2" /> Back to Job Listings
          </Link>
        </Container>
      </section>

      <section className="bg-light py-5">
        <Container>
          <Row className="g-4">
            <Col md={8}>
              <Card className="p-4 text-center text-md-start">
                <Card.Body>
                  <div className="text-muted mb-2">{job.type}</div>
                  <Card.Title as="h1" className="display-5 fw-bold">{job.title}</Card.Title>
                  <div className="text-muted mb-3 d-flex align-items-center justify-content-center justify-content-md-start">
                    <FaMapMarker className="me-1 text-warning" />
                    <span className="text-warning">{job.location}</span>
                  </div>
                  <h3 className="text-primary fw-bold mt-4">Job Description</h3>
                  <Card.Text>{job.description}</Card.Text>
                  <h3 className="text-primary fw-bold mt-3">Salary</h3>
                  <Card.Text>{job.salary} / Year</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="p-4">
                <Card.Body>
                  <Card.Title as="h3" className="fw-bold">Company Info</Card.Title>
                  <h4>{job.company?.name}</h4>
                  <Card.Text>{job.company?.description}</Card.Text>
                  <hr />
                  <h5>Contact Email:</h5>
                  <p className="bg-light p-2 rounded">{job.company?.contactEmail}</p>
                  <h5>Contact Phone:</h5>
                  <p className="bg-light p-2 rounded">{job.company?.contactPhone}</p>
                </Card.Body>
              </Card>

              <Card className="p-4 mt-4">
                <Card.Body>
                  <Card.Title as="h3" className="fw-bold">Manage Job</Card.Title>
                  <Button
                    as={Link}
                    to={`/edit-job/${job.id}`}
                    variant="primary"
                    className="w-100 mb-3"
                  >
                    Edit Job
                  </Button>
                  <Button
                    onClick={() => onDelete(job.id)}
                    variant="danger"
                    className="w-100"
                  >
                    Delete Job
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default JobPage;
