import { useState, useEffect } from "react";
import axios from "axios";

const useCheckQualfication = (reservationId) => {
  const token = localStorage.getItem("refresh_token");
  const [qualified, setQualified] = useState(false);
  useEffect(() => {
    const checkQualification = async () => {
      try {
        const res = await axios.post(
          `/api/review/check/qualification?partyRoomReservationId=${reservationId}`,
          "",
          {
            headers: { Authorization: token },
          }
        );
        setQualified(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    checkQualification();
  }, []);
  return qualified;
};

export default useCheckQualfication;
