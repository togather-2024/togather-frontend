import styled from "@emotion/styled";
import React from "react";
import { colors } from "../styles/colors";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Counter = () => {
  return (
    <Container>
      <Button>
        <FaMinus size="12" color="gray" />
      </Button>
      <Text>0</Text>
      <Button>
        <FaPlus size="12" color="gray" />
      </Button>
    </Container>
  );
};

export default Counter;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Button = styled.button`
  all: unset;
  background-color: ${colors.point04};
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const Text = styled.div``;
