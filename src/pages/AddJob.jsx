import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

const AddJob = () => {
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e)
  }
  return (
    <section className="bg-light py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "600px" }}>
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Add Job</h2>

            <Form.Group className="mb-3" controlId="type">
              <Form.Label>Job Type</Form.Label>
              <Form.Select required>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Job Listing Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Beautiful Apartment In Miami"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Add any job duties, expectations, requirements, etc"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="salary">
              <Form.Label>Salary</Form.Label>
              <Form.Select required>
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company Location"
                required
              />
            </Form.Group>

            <h3 className="mb-3">Company Info</h3>

            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Company Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="company_description">
              <Form.Label>Company Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="What does your company do?"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact_email">
              <Form.Label>Contact Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email address for applicants"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact_phone">
              <Form.Label>Contact Phone</Form.Label>
              <Form.Control type="tel" placeholder="Optional phone for applicants" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Add Job
            </Button>
          </Form>
        </Card>
      </Container>
    </section>
  );
};

export default AddJob;
