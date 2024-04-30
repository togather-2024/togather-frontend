import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RoomDetailAPI = ({ setLoading }) => {
  const [data, setData] = useState(null);
  const params = useParams();
  const token = localStorage.getItem("refresh_token");

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get(
          `/api/partyroom/detail/${Number(params.roomId)}`,
          { headers: { Authorization: token } }
        );
        setData(res.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    getDetail();
  }, [params.roomId]);

  return data;
};

export default RoomDetailAPI;
