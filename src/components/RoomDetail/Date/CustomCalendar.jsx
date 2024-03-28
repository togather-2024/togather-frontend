import React, { useCallback, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { colors } from "../../../styles/colors";
import { weight } from "../../../styles/fonts";
import { useRecoilValue } from "recoil";
import { selectedDateState } from "../../../recoil/atoms/selectedDate";

const CustomCalendar = ({ handleDateChange }) => {
  const selectedDate = useRecoilValue(selectedDateState);

  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        value={selectedDate}
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format("DD")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
        calendarType="gregory" // 일요일 부터 시작
        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
        minDetail="year" // 10년단위 년도 숨기기
        minDate={new Date()}
      />
    </StyledCalendarWrapper>
  );
};

export default CustomCalendar;
const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  .react-calendar {
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 4px 2px 10px 0px rgba(0, 0, 0, 0.13);
    padding: 3% 5%;
    background-color: white;
  }
  /*네비게이션 폰트*/
  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 1rem;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${colors.point04};
    border-radius: 10px;
  }
  .react-calendar__navigation button:disabled {
    border-radius: 10px;
  }

  /*요일 밑줄 제거*/
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }
  .react-calendar__tile--active,
  .react-calendar__tile--active:enabled:focus {
    background: ${colors.point04};
    color: ${colors.black};
    border-radius: 10px;
  }

  .react-calendar__tile--active:enabled:hover {
    background: ${colors.hover01};
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus,
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: ${colors.hover01};
    border-radius: 10px;
  }

  .react-calendar__tile--now {
    color: ${colors.point01};
    font-weight: ${weight.medium};
  }
`;
const StyledCalendar = styled(Calendar)``;
