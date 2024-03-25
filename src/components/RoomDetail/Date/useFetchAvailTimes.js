import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedDateState } from "../../../recoil/atoms/selectedDate";
import { availableTimeState } from "../../../recoil/atoms/availableTimeState";
import axios from "axios";

const useFetchAvailTimes = (roomId) => {
  const [availableTime, setAvailableTime] = useRecoilState(availableTimeState);
  const date = useRecoilValue(selectedDateState);
  const token = ``; //토큰 로컬스토리지에서 꺼내오기
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate2 = `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`; //yyyy-mm--dd로 포맷
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 선택한 날짜를 서버로 전송하는 비동기 함수 호출
        const res = await axios.get(
          `/partyroom/reservation/search/available?partyroomId=${Number(roomId.roomId)}&date=${formattedDate2}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // 서버로부터 받은 데이터를 상태에 업데이트
        setAvailableTime(res.data.availableTimes);
      } catch (error) {
        console.error("서버 요청 중 오류 발생:", error);
      }
    };

    fetchData(); // selectedDate가 변경될 때마다 fetchData 함수 호출
  }, [date, formattedDate2]);
  return <div></div>;
};

export default useFetchAvailTimes;