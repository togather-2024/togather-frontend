import { useEffect, useState } from "react";
import axios from "axios";
const GetReservationList = ({ setLoading }) => {
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
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return data;
};

export default GetReservationList;
