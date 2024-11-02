import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useJobLoader from "../hooks/useJobLoader";

const EditJobPage = () => {
  const { id } = useParams();
  // console.log("id:", id)
  const { jobResult, apiError, loading } = useJobLoader(id);

  const navigate = useNavigate();
  const [title, setTitle] = useState(jobResult?.title);
  const [type, setType] = useState(jobResult?.type);
  const [location, setLocation] = useState(jobResult?.location);
  const [description, setDescription] = useState(jobResult?.description);
  const [salary, setSalary] = useState(jobResult?.salary);
  const [companyName, setCompanyName] = useState(jobResult?.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    jobResult?.company.description
  );
  const [contactEmail, setContactEmail] = useState(
    jobResult?.company.contactEmail
  );
  const [contactPhone, setContactPhone] = useState(
    jobResult?.company.contactPhone
  );

  if (loading) return <p>Loading...</p>;
  if (apiError) return <p>Error: {apiError}</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    editJobs(newJob);
    navigate("/jobs");
  };

  const editJobs = async (job) => {
    try {
      const res = await axios.put(`/api/jobs/${id}`, job);
      const data = res.data;
      return data;
    } catch (error) {
      throw new Error("Failed to update post.");
    }
  };

  const handleCancel = () => {
    navigate(`/jobs/${id}`);
  };

  return (
    <section className="bg-light py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "600px" }}>
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Edit Job</h2>

            <Form.Group className="mb-3" controlId="type">
              <Form.Label>Job Type</Form.Label>
              <Form.Select
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={description}
                placeholder="Add any job duties, expectations, requirements, etc"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="salary">
              <Form.Label>Salary</Form.Label>
              <Form.Select
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            <h3 className="mb-3">Company Info</h3>

            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="company_description">
              <Form.Label>Company Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact_email">
              <Form.Label>Contact Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact_phone">
              <Form.Label>Contact Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-2">
              Edit Job
            </Button>
            <Button variant="danger" onClick={handleCancel} className="w-100">
              Cancel
            </Button>
          </Form>
        </Card>
      </Container>
    </section>
  );
};

export default EditJobPage;
