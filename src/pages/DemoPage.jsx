
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const DemoPage = () => {

const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState({});

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`/api/jobs`);
        setJob(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [id]);
  
console.log(job)
  if (loading) return <p>Loading...</p>;

  return (
   <>
    <div>
      {job.map(jobItem => (
        <div key={jobItem.id}>
          <h2>{jobItem.title}</h2>
         
        </div>
      ))}
    </div>
   </>
  )
}

export default DemoPage
