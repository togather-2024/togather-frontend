import React from "react";
import styled from "@emotion/styled";
import { size, weight } from "../../styles/fonts";
import { colors } from "../../styles/colors";

const ReservateInfo = () => {
  return (
    <Container>
      <TopSection>
        <Heading>예약 정보</Heading>
        <EditButton>변경하기</EditButton>
      </TopSection>
      <BottomSection>
        <DataContainer>
          <Subheading>날짜</Subheading>
          <Text>0000년 00월 00일</Text>
        </DataContainer>
        <DataContainer>
          <Subheading>시간</Subheading>
          <Text>00:00~00:00 (총 0시간)</Text>
        </DataContainer>
        <DataContainer>
          <Subheading>인원</Subheading>
          <Text>0명</Text>
        </DataContainer>
      </BottomSection>
    </Container>
  );
};

export default ReservateInfo;

const Container = styled.div`
  padding-right: 44px;
  margin: 30px 0;
`;

const TopSection = styled.div`
  display: flex;
`;

const Heading = styled.div`
  font-size: ${size.h4};
  font-weight: ${weight.semibold};
`;

const EditButton = styled.button`
  all: unset;
  margin-left: auto;
  background-color: ${colors.gray30};
  padding: 8px;
  border-radius: 20px;
  font-size: ${size.caption};
  color: ${colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${colors.dark};
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
`;

const Subheading = styled.div`
  font-weight: ${weight.semibold};
  margin-bottom: 8px;
`;

const Text = styled.div`
  color: ${colors.gray80};
`;

const DataContainer = styled.div``;
