import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { selectedDateState } from "../../../recoil/atoms/selectedDate";
import { availableTimeState } from "../../../recoil/atoms/availableTimeState";
import axios from "axios";
import { timeRangeState } from "../../../recoil/atoms/timeRangeState";

const useFetchAvailTimes = (roomId) => {
  const [availableTime, setAvailableTime] = useRecoilState(availableTimeState);
  const setSelectedRange = useSetRecoilState(timeRangeState);

  const date = useRecoilValue(selectedDateState);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate2 = `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`; //yyyy-mm--dd로 포맷
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 선택한 날짜를 서버로 전송하는 비동기 함수 호출
        const res = await axios.get(
          `/partyroom/reservation/search/available?partyroomId=${Number(roomId.roomId)}&date=${formattedDate2}`
        );
        // 서버로부터 받은 데이터를 상태에 업데이트
        setAvailableTime(res.data.availableTimes);
        setSelectedRange({ start: null, end: null });
      } catch (error) {
        console.error("서버 요청 중 오류 발생:", error);
      }
    };

    fetchData(); // selectedDate가 변경될 때마다 fetchData 함수 호출
  }, [date, formattedDate2]);
  return;
};

export default useFetchAvailTimes;
