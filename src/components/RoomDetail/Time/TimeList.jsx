import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { timeRangeState } from "../../../recoil/atoms/timeRangeState";
import styled from "@emotion/styled";
import TimeItem from "./TimeItem";
import { availableTimeState } from "../../../recoil/atoms/availableTimeState";

const TimeList = ({ data }) => {
  const [selectedRange, setSelectedRange] = useRecoilState(timeRangeState);

  const openingHour = data?.openingHour;
  const closingHour = data?.closingHour;

  const availableTimes = useRecoilValue(availableTimeState);

  let times = Array.from(
    { length: closingHour - openingHour },
    (_, index) => `${openingHour + index}:00`
  );

  const opertionTimeArr = Array.from(
    { length: closingHour - openingHour },
    (_, index) => openingHour + index
  );

  const unavailableTimeArr = opertionTimeArr.filter(
    (time) => !availableTimes.includes(time)
  );

  const unavialableTimeToIndex = unavailableTimeArr.map(
    (el) => el - openingHour
  );

  const handleClick = (index) => {
    //선택된 범위가 없는 경우
    if (selectedRange.start === null) {
      setSelectedRange({ start: index, end: index });
      //클릭 요소가 끝나는 시간 이후인 경우
    } else if (index > selectedRange.end) {
      const newSelectedRange = { start: selectedRange.start, end: index };
      setSelectedRange(newSelectedRange);
      //시작시간과 끝시간이 같을 때, 선택된 시간대를 클릭하면 선택 취소
    } else if (index === selectedRange.end && index === selectedRange.start) {
      setSelectedRange({ start: null, end: null });
      //선택된 범위의 끝 시간을 클릭했을 때는 이전 요소로 끝 시간 재설정
    } else if (index === selectedRange.end) {
      setSelectedRange({ start: selectedRange.start, end: index - 1 });
      //새로운 시작 시간 설정
    } else {
      setSelectedRange({ start: index, end: index });
    }

    //선택된 범위가 예약된 시간과 겹치는지 확인
    const overlap = unavialableTimeToIndex.some(
      (time) => time > selectedRange.start && time < index
    );
    console.log(unavailableTimeArr, index, overlap);
    console.log(overlap);

    if (overlap) {
      setSelectedRange({ start: selectedRange.start, end: selectedRange.end });
      alert("이미 예약된 시간 범위는 선택하실 수 없습니다.");
    }
  };

  const list = times?.map((time, index) => {
    const isSelected =
      selectedRange.start !== null &&
      index >= selectedRange.start &&
      index <= selectedRange.end;
    const isAvailable = availableTimes.includes(openingHour + index);
    //현재 시간 이후의 시간들만 선택 가능, 운영 요일이 아닌 날짜의 시간은 반환x

    return (
      <TimeItem
        key={index}
        index={index}
        data={time}
        handleClick={() => handleClick(index)}
        selected={isSelected}
        isAvailable={isAvailable}
      />
    );
  });

  return <Container>{list}</Container>;
};

export default TimeList;

const Container = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  text-align: center;
`;
