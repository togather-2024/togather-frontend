import { useEffect, useState } from "react";
import { getUserInfo } from "../api/api";

const useFetchUserInfo = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getUserInfo();
        setData(res.data);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };

    getData();
  }, []);
  return data;
};

export default useFetchUserInfo;
