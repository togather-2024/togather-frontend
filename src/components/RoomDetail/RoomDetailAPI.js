import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RoomDetailAPI = () => {
  const [data, setData] = useState(null);
  // const num = useParams();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get(`api/partyroom/detail/${num}`);
        setData(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getDetail();
  }, []);

  return data;
};

export default RoomDetailAPI;
