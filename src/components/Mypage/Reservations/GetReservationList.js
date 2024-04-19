import { useEffect, useState } from "react";
import axios from "axios";
const GetReservationList = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("refresh_token");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/partyroom/reservation/my", {
          headers: {
            Authorization: token,
          },
        });
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return data;
};

export default GetReservationList;
