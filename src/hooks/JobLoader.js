import { useParams } from "react-router-dom";

// JobLoader.js
export const JobLoader = async ({ params }) => {
    
    const res = await fetch(`/api/jobs/${params.id}`);
    if (!res.ok) {
      throw new Error("Failed to load job data.");
    }
    const data = await res.json();
    return data;
  };
  