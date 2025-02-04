import axios from "axios";
import { useState } from "react";

const useAxios = (url, method = "get", options = {}) => {
  const [jsonData, setJsonData] = useState(null);

  const fetchData = async () => {
    try {
      let response;
      switch (method.toLowerCase()) {
        case "get":
          response = await axios.get(url, options);
          break;
        case "post":
          response = await axios.post(url, options);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      setJsonData(response);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return {
    jsonData,
    fetchData,
  };
};

export default useAxios;
