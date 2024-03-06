import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { size, weight } from "../../styles/fonts";
import Counter from "./Counter";
import TimeList from "./TimeList";

const Booking = () => {
  return (
    <Container>
      <SelectContainer>
        <PricePerTimeContainer>
          <PricePerTime>₩ 20,000</PricePerTime>
          <Text>/ 시간</Text>
        </PricePerTimeContainer>
        <DateContainer>
          <Title>날짜</Title>
          <Text>0000년 00월 00일 (월)</Text>
          <Edit>변경</Edit>
        </DateContainer>
        <TimeContainer>
          <ContainerTop>
            <Title>이용 시간</Title>
            <Text>20:00 ~ 24:00 (4시간)</Text>
          </ContainerTop>
          <TimeList />
        </TimeContainer>
        <PersonnelContainer>
          <Title>인원</Title>
          <Counter />
        </PersonnelContainer>
        <Total>
          <Title>총 결제 금액</Title>
          <Text>₩ 20,000 * 4시간</Text>
        </Total>
      </SelectContainer>
      <Line />
      <TotalPrice>₩ 80,000</TotalPrice>
      <BookButton>예약하기</BookButton>
    </Container>
  );
};

export default Booking;

const Container = styled.div`
  border: 1px solid ${colors.point03};
  padding: 30px;
  border-radius: 30px;
  margin-bottom: 32px;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const PricePerTimeContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const PricePerTime = styled.div`
  font-size: ${size.body02};
  font-weight: ${weight.bold};
`;

const DateContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const TimeContainer = styled.div``;

const ContainerTop = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const PersonnelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalPrice = styled.div`
  font-size: ${size.h3};
  font-weight: ${weight.semibold};
  color: ${colors.point01};
  display: flex;
  justify-content: flex-end;
`;

const Text = styled.div`
  font-weight: ${weight.normal};
`;

const Title = styled.div`
  font-weight: ${weight.semibold};
`;

const Edit = styled.div`
  font-size: ${size.caption};
  color: ${colors.dark};
  text-decoration: underline;
`;

const Line = styled.hr`
  margin: 18px 0;
  border: 1px solid ${colors.gray10};
`;

const BookButton = styled.button`
  all: unset;
  background-color: ${colors.point01};
  width: 100%;
  padding: 10px 0;
  text-align: center;
  margin-top: 40px;
  border-radius: 10px;
  font-size: ${size.body02};
  font-weight: ${weight.semibold};
  color: ${colors.white};
  cursor: pointer;
`;
