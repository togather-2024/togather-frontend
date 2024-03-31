import React from "react";
import styled from "@emotion/styled";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { colors } from "../../styles/colors";
import { weight } from "../../styles/fonts";
//캘린더를 사용할 때 value값에 넣어줄 selectedDate랑, onChange값에 넣어줄 handleDateChange값만 프롭스로 내려주면 됩니다!!
//예시: <CustomCalendar handleDateChange={함수 이름} selectedDate={변수이름} />
//recoil에 만들어져있는 roomdetail 페이지에 쓰이는 selectedDateState 상태와 혼동하지 않도록 주의!!

const CustomCalendar = ({ handleDateChange, selectedDate }) => {
  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        value={selectedDate} //상태관리 변수
        onChange={handleDateChange} //상태 변경 함수
        formatDay={(locale, date) => moment(date).format("DD")} //날짜 옆에 '일' 문자 제거
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
        calendarType="gregory" // 일요일 부터 시작
        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
        minDetail="year" // 10년단위 년도 숨기기
        minDate={new Date()} //선택 가능한 날짜(오늘부터로 설정)
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
