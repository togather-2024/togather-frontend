import { useEffect, useState } from "react";
import { getUserInfo } from "../api/api";

const useFetchUserInfo = (token) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getUserInfo({ token });
        setData(res.data);
        console.log(res.data);
      } catch (e) {
        console.error(e);
      }
    };

    getData();
  }, [token]);
  return data;
};

export default useFetchUserInfo;
