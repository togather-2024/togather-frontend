import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GetReview = () => {
  const [data, setData] = useState(null);
  const { roomId } = useParams();

  useEffect(() => {
    const getReview = async () => {
      try {
        const res = await axios.get(`/api/review/partyroom/${Number(roomId)}`);
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getReview();
  }, []);
  return data;
};

export default GetReview;
