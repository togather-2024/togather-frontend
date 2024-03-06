import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

const TimeList = () => {
  return (
    <Container>
      <Button>08:00</Button>
    </Container>
  );
};

export default TimeList;

const Container = styled.div`
  margin-top: 12px;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid ${colors.point01};
  padding: 8px;
  border-radius: 10px;
`;
