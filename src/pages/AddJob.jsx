import axios from "axios";
import { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Joi from "joi";
import  useJobLoader  from "../hooks/useJobLoader";

const AddJob = () => {
  const {id} = useParams()
  // const { jobResult, apiError} = useJobLoader(id);

  // if (apiError) {
  //   alert(apiError)
  // }
  const nevigate = useNavigate();
  const [title, setTitle] = useState();
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState();
  const [salary, setSalary] = useState("Under $50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [error, setError] = useState(null);
  

  const jobSchema = Joi.object({
    title: Joi.string().min(3).max(50).regex(/^[a-zA-Z\s]+$/).required()
      .messages({
        "string.pattern.base": "Title can only contain letters and spaces",
        "string.min": "Title should be at least 3 characters",
        "string.max": "Title should be no more than 50 characters"
      }),
    type: Joi.string().valid("Full-Time", "Part-Time", "Remote", "Internship").required(),
    location: Joi.string().min(2).max(100).required(),
    description: Joi.string().min(10).max(500).required()
    .messages({
      "string.pattern.base": "Description can only contain letters and spaces",
      "string.min": "Description should be at least 3 characters",
      "string.max": "Description should be no more than 50 characters"
    }),
    salary: Joi.string().valid(
      "Under $50K", "$50K - 60K", "$60K - 70K", "$70K - 80K", "$80K - 90K",
      "$90K - 100K", "$100K - 125K", "$125K - 150K", "$150K - 175K",
      "$175K - 200K", "Over $200K"
    ).required(),
    company: Joi.object({
      name: Joi.string().min(2).max(50).required(),
      description: Joi.string().max(500).optional()
      .messages({
        "string.pattern.base": "Description can only contain letters and spaces",
        "string.min": "Description should be at least 3 characters",
        "string.max": "Description should be no more than 50 characters"
      }),
      contactEmail: Joi.string().email({ tlds: { allow: false } }).required(),
      contactPhone: Joi.string().pattern(/^[0-9]+$/).length(10).optional()
        .messages({
          "string.pattern.base": "Contact phone must contain only numbers",
          
        }),
    }).required(),
  });
  
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

    const { error } = jobSchema.validate(newJob);
    if (error) {
      setError(error.message); 
      return;
    }

    addJob(newJob);
    nevigate('/jobs')
  };

  const addJob = async (newJob) => {
    try {
      const res = await axios.post("/api/jobs", newJob);
      return res.data;
    } catch (error) {
      console.error("Failed to add job:", error);
    }
  };

  return (
    <section className="bg-light py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "600px" }}>
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Add Job</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <Form.Group className="mb-3" controlId="type"
             onChange={(e) => setType(e.target.value)}
             >
              <Form.Label>Job Type</Form.Label>
              <Form.Select required>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="title"
             onChange={(e) => setTitle(e.target.value)}
             >
              <Form.Label>Job Listing Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Beautiful Apartment In Miami"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description"
            
            onChange={(e) => setDescription(e.target.value)}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Add any job duties, expectations, requirements, etc"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="salary"
            onChange={(e) => setSalary(e.target.value)}
            >
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

            <Form.Group className="mb-3" controlId="location"
            onChange={(e) => setLocation(e.target.value)}
            >
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company Location"
                required
              />
            </Form.Group>

            <h3 className="mb-3">Company Info</h3>

            <Form.Group className="mb-3" controlId="company"
            onChange={(e) => setCompanyName(e.target.value)}>
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Company Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="company_description"
            onChange={(e) => setCompanyDescription(e.target.value)}
            >
              <Form.Label>Company Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="What does your company do?"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact_email"
            onChange={(e) => setContactEmail(e.target.value)}>
              <Form.Label>Contact Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email address for applicants"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact_phone"
            onChange={(e) => setContactPhone(e.target.value)}>
              
              <Form.Label>Contact Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Optional phone for applicants"
              />
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
