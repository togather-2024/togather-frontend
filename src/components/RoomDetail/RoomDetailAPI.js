import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RoomDetailAPI = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  //수정
  console.log(typeof Number(params.roomId));

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get(
          `/api/partyroom/detail/${Number(params.roomId)}`
        );
        setData(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getDetail();
  }, [params.roomId]);

  return data;
};

export default RoomDetailAPI;
