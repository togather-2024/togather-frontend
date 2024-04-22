import { useEffect, useState } from "react";
import { getUserInfo } from "../api/api";
import { loginState } from "../recoil/atoms/loginState";
import { useRecoilValue } from "recoil";

const useFetchUserInfo = () => {
  const [data, setData] = useState(null);
  const isLoggedIn = useRecoilValue(loginState);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getUserInfo();
        setData(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    if (isLoggedIn) {
      getData();
    }
  }, []);
  return data;
};

export default useFetchUserInfo;
