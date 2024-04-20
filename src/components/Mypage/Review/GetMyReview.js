import { useEffect, useState } from "react";
import axios from "axios";

const GetMyReview = ({ setLoading }) => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("refresh_token");
  useEffect(() => {
    const getReview = async () => {
      try {
        const res = await axios.get(`/api/review/my`, {
          headers: { Authorization: token },
        });
        setData(res.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getReview();
  }, []);
  return data;
};

export default GetMyReview;
