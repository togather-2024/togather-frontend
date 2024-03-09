import React from "react";
import styled from "@emotion/styled";
import { size, weight } from "../styles/fonts";
import { IoIosArrowBack } from "react-icons/io";
import ReservateInfo from "../components/ReservationConfirm/ReservateInfo";
import PriceInfo from "../components/ReservationConfirm/PriceInfo";

const ReservationConfirm = () => {
  return (
    <>
      <TitleContainer>
        <PrevButton>
          <IoIosArrowBack color="#7A7A7A" size={28} />
        </PrevButton>
        <Title>확인 및 결제</Title>
      </TitleContainer>
      <Container>
        <Left>
          <ReservateInfo />
        </Left>
        <Right>
          <PriceInfo />
        </Right>
      </Container>
    </>
  );
};

export default ReservationConfirm;

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
`;
const Left = styled.div`
  /* border: 1px solid blue; */
  flex: 2;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
`;
const PrevButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: ${size.h2};
  font-weight: ${weight.semibold};
`;

const Right = styled.div`
  /* border: 1px solid green; */
  flex: 1;
`;
