import React, { useState } from "react";
import styled from "@emotion/styled";
import { weight, size } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";
import CustomCalendar from "./CustomCalendar";
import { useRecoilValue } from "recoil";
import { selectedDateState } from "../../../recoil/atoms/selectedDate";

const DateContainer = () => {
  const date = useRecoilValue(selectedDateState);
  const [show, setShow] = useState(false);
  const handleShowCalendar = () => {
    setShow(!show);
  };

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}년 ${month}월 ${day}일 (${getDayOfWeek(date)})`;

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
      {show && <CustomCalendar />}
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
