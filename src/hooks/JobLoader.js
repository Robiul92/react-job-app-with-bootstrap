import axios from "axios";
import { useParams } from "react-router-dom";

// JobLoader.js
export const JobLoader = async ({ params }) => {
    
    try {
      const res = await axios.get(`/api/jobs/${params.id}`);
   const data = await res.data;
    return data;
    } catch (error) {
      throw new Error("Failed to load job data."); 
    }
  };
  