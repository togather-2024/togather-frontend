import React from "react";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { colors } from "../../styles/colors";
import { size, weight } from "../../styles/fonts";
import TimeContainer from "./Time/TimeContainer";
import { timeRangeState } from "../../recoil/atoms/timeRangeState";
import DateContainer from "./Date/DateContainer";
import PersonnelContainer from "./Personnel/PersonnelContainer";

const Booking = ({ data }) => {
  const selectedRange = useRecoilValue(timeRangeState);
  const partyRoomDto = data?.partyRoomDto;
  const price = partyRoomDto?.price;
  const totalPrice = price * (selectedRange.end - selectedRange.start + 1);
  function priceToString(price) {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Container>
      <SelectContainer>
        <PricePerTimeContainer>
          <PricePerTime>₩ {priceToString(price)}</PricePerTime>
          <Text>/ 시간</Text>
        </PricePerTimeContainer>
        <DateContainer />
        <TimeContainer data={data} />
        <PersonnelContainer data={data?.partyRoomDto} />
        <Total>
          <Title>총 결제 금액</Title>
          <Text>
            ₩ {price} * {selectedRange.end - selectedRange.start + 1}시간
          </Text>
        </Total>
      </SelectContainer>
      <Line />
      <TotalPrice>₩ {priceToString(totalPrice)}</TotalPrice>
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
