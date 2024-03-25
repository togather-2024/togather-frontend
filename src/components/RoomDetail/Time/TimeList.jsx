import React from "react";
import styled from "@emotion/styled";
import TimeItem from "./TimeItem";
const TimeList = ({ data, selectedRange, setSelectedRange }) => {
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

  const list = times?.map((time, index) => {
    const isSelected =
      index >= selectedRange.start && index <= selectedRange.end;
    return (
      <TimeItem
        key={index}
        index={index}
        data={time}
        handleClick={() => handleClick(index)}
        selected={isSelected}
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
