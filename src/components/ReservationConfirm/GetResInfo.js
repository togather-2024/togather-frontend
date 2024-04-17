import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import React from "react";

const GetResInfo = (reservationId) => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("refresh_token");

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get(
          `/partyroom/reservation/my/${reservationId}`,
          {
            headers: { Authorization: token },
          }
        );
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getDetail();
  }, [reservationId]);

  return data;
};

export default GetResInfo;
