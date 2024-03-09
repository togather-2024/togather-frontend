import { useEffect, useState } from "react";
import axios from "axios";

const RoomDetailAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get(`api/partyroom/detail/5`);
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