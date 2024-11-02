import axios from "axios";
import { useEffect, useState } from "react";

const useJobLoader = (id) => {
  const [jobResult, setJobResult] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  //   console.log("ID", id);
  useEffect(() => {
    if (!id) {
        setLoading(false);
        return;
    }
    setLoading(true);
    console.log("Id:", id)
    axios.get(`http://localhost:8000/jobs/${id}`)
      .then((res) => {
        setJobResult(res?.data);
        console.log("result", res.data);
      })
      .catch((error) => {
        setApiError(error.message);
        console.log("error", error);
      })
      .finally(() => setLoading(false));
  }, [id]);
  return { jobResult, apiError, loading };
};
export default useJobLoader;
