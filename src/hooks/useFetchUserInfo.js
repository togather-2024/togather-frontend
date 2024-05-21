import { useEffect } from "react";
import { getUserInfo } from "../api/api";
import { profileInfoState } from "../recoil/atoms/profileState";
import { useSetRecoilState } from "recoil";

const useFetchUserInfo = () => {
  const setProfileInfo = useSetRecoilState(profileInfoState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserInfo();
        setProfileInfo(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [setProfileInfo]);
};

export default useFetchUserInfo;
