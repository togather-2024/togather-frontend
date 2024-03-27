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

  const handleClick = (index) => {
    if (selectedRange.start === null) {
      setSelectedRange({ start: index, end: index });
    } else if (index > selectedRange.end) {
      //클릭된 요소가 끝나는 시간 이후라면 해당 요소를 끝나는 시간으로 설정
      const newSelectedRange = { start: selectedRange.start, end: index };
      setSelectedRange(newSelectedRange);
    } else if (index === selectedRange.end && index === selectedRange.start) {
      setSelectedRange({ start: null, end: null });
    } else if (index === selectedRange.end) {
      setSelectedRange({ start: selectedRange.start, end: index - 1 });
    } else {
      setSelectedRange({ start: index, end: index });
    }
  };

  let times = Array.from(
    { length: closingHour - openingHour },
    (_, index) => `${openingHour + index}:00`
  );

  const availableTimes = useRecoilValue(availableTimeState);

  const list = times?.map((time, index) => {
    const isSelected =
      index >= selectedRange.start && index <= selectedRange.end;
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
