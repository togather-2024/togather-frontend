import React from "react";
import styled from "@emotion/styled";
import TimeList from "./TimeList";
import { weight } from "../../../styles/fonts";

const TimeContainer = ({ data, selectedRange, setSelectedRange }) => {
  return (
    <Container>
      <ContainerTop>
        <Title>이용 시간</Title>
        <Text>
          {selectedRange.start + data?.partyRoomDto?.openingHour}:00 ~{" "}
          {selectedRange.end + data?.partyRoomDto?.openingHour + 1}:00 (총{" "}
          {selectedRange.end - selectedRange.start + 1}시간)
        </Text>
      </ContainerTop>
      <TimeList
        data={data?.partyRoomDto}
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
      />
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
