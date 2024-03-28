import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { weight, size } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";
import CustomCalendar from "./CustomCalendar";
import { useRecoilValue, useRecoilState } from "recoil";
import { selectedDateState } from "../../../recoil/atoms/selectedDate";
import { availableTimeState } from "../../../recoil/atoms/availableTimeState";

const DateContainer = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [availableTime, setAvailableTime] = useRecoilState(availableTimeState);
  const formattedDate2 = selectedDate.toISOString().split("T")[0]; //yyyy-mm--dd로 포맷
  const roomId = useParams();
  const token = ``;

  const date = useRecoilValue(selectedDateState);
  const [show, setShow] = useState(false);
  const handleShowCalendar = () => {
    setShow(!show);
  };

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}년 ${month}월 ${day}일 (${getDayOfWeek(date)})`;

  const handleDateChange = useCallback(
    (newDate) => {
      setSelectedDate(newDate);
    },
    [setSelectedDate]
  );

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
        console.log(res.data.availableTimes);
      } catch (error) {
        console.error("서버 요청 중 오류 발생:", error);
      }
    };

    fetchData(); // selectedDate가 변경될 때마다 fetchData 함수 호출
  }, [selectedDate]);

  function getDayOfWeek(date) {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    return daysOfWeek[date.getDay()];
  }

  return (
    <>
      <Container>
        <Title>날짜</Title>
        <Text>{formattedDate}</Text>
        <Edit onClick={handleShowCalendar}>변경</Edit>
      </Container>
      {show && <CustomCalendar handleDateChange={handleDateChange} />}
    </>
  );
};

export default DateContainer;
const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Text = styled.div`
  font-weight: ${weight.normal};
`;

const Title = styled.div`
  font-weight: ${weight.semibold};
`;

const Edit = styled.button`
  all: unset;
  cursor: pointer;
  font-size: ${size.caption};
  color: ${colors.dark};
  text-decoration: underline;
`;
