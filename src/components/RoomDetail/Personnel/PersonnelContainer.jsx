import React from "react";
import Counter from "./Counter";
import styled from "@emotion/styled";
import { weight } from "../../../styles/fonts";

const PersonnelContainer = ({ data }) => {
  return (
    <Container>
      <Title>인원</Title>
      <Counter data={data} />
    </Container>
  );
};

export default PersonnelContainer;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Title = styled.div`
  font-weight: ${weight.semibold};
`;
