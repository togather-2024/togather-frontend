import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { size, weight } from "../../styles/fonts";

const CancelContainer = ({ handleClick, setIsOpen }) => {
  return (
    <Container>
      <CancelLabel>예약 취소</CancelLabel>
      <CancelButton onClick={handleClick}>예약 취소하기</CancelButton>
    </Container>
  );
};

export default CancelContainer;

const Container = styled.div`
  margin-top: 10px;
  padding: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.gray10};
  border-radius: 15px;
`;

const CancelLabel = styled.div`
  font-size: ${size.h4};
  font-weight: ${weight.semibold};
  color: #ff0000;
`;

const Button = styled.button`
  all: unset;
  width: fit-content;
  display: flex;
  margin-top: auto;
  color: ${colors.white};
  padding: 12px;
  border-radius: 10px;
  background-color: ${colors.point02};
  cursor: pointer;
  &:hover {
    background-color: ${colors.hover01};
  }
`;

const CancelButton = styled(Button)`
  background-color: #ff6b6b;
  &:hover {
    background-color: #ff0000;
  }
`;
