import React from "react";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import TimeList from "./TimeList";
import { weight } from "../../../styles/fonts";
import { timeRangeState } from "../../../recoil/atoms/timeRangeState";

const TimeContainer = ({ data }) => {
  const selectedRange = useRecoilValue(timeRangeState);
  const startTime = selectedRange.start + data?.partyRoomDto?.openingHour;
  const endTime = selectedRange.end + data?.partyRoomDto?.openingHour + 1;
  return (
    <Container>
      <ContainerTop>
        <Title>이용 시간</Title>
        <Text>
          {selectedRange.start === null && selectedRange.end === null
            ? "이용 시간을 선택해주세요."
            : `${startTime}:00 ~ ${endTime}:00 (총
          ${selectedRange.end - selectedRange.start + 1}시간)`}
        </Text>
      </ContainerTop>
      <TimeList data={data?.partyRoomDto} />
    </Container>
  );
};

export default TimeContainer;

const Container = styled.div``;

const ContainerTop = styled.div`
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
