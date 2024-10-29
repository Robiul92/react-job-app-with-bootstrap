import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const EditJobPage = () => {
  const job = useLoaderData();
  const { id } = useParams();
  const nevigate = useNavigate();
  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

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
    nevigate("/jobs");
  };

  const editJobs = async (job)=>{
const res = await fetch(`/api/jobs/${id}`,
  {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  }
)
return;
  };

  const handleCancel = () =>{
    nevigate(`/jobs/${id}`)
  }

  const addJob = () => {};
  return (
    <section className="bg-light py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "600px" }}>
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Edit Job</h2>

            <Form.Group
              className="mb-3"
              controlId="type"
              onChange={(e) => setType(e.target.value)}
            >
              <Form.Label>Job Type</Form.Label>
              <Form.Select required
              value ={type}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="title"
              onChange={(e) => setTitle(e.target.value)}
            >
              <Form.Label>Job Listing Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Beautiful Apartment In Miami"
                required
                value ={title}
              />
              
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="description"
              onChange={(e) => setDescription(e.target.value)}
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value ={description}
                placeholder="Add any job duties, expectations, requirements, etc"
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

            <Form.Group
              className="mb-3"
              controlId="location"
              onChange={(e) => setLocation(e.target.value)}
            >
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company Location"
                required
                value ={location}
              />
            </Form.Group>

            <h3 className="mb-3">Company Info</h3>

            <Form.Group
              className="mb-3"
              controlId="company"
              onChange={(e) => setCompanyName(e.target.value)}
            >
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Company Name" 
              value ={companyName} />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="company_description"
              onChange={(e) => setCompanyDescription(e.target.value)}
            >
              <Form.Label>Company Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="What does your company do?"
                value ={companyDescription}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="contact_email"
              onChange={(e) => setContactEmail(e.target.value)}
            >
              <Form.Label>Contact Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email address for applicants"
                required
                value ={contactEmail}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="contact_phone"
              onChange={(e) => setContactPhone(e.target.value)}
            >
              <Form.Label> Contact Phone </Form.Label>
              <Form.Control
                type="tel"
                placeholder="Optional phone for applicants"
                value ={contactPhone}
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
