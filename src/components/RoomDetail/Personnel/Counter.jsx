import styled from "@emotion/styled";
import React, { useState } from "react";
import { colors } from "../../../styles/colors";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Counter = ({ data }) => {
  const guestCapacity = data?.guestCapacity;
  const [count, setCount] = useState(0);
  const handleCountAdd = () => {
    if (count < guestCapacity) {
      setCount(count + 1);
    }
  };
  const handleCountSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <Container>
      <Button onClick={handleCountSubtract} disabled={count <= 1}>
        <FaMinus size="12" color="gray" />
      </Button>
      <Text>{count}</Text>
      <Button onClick={handleCountAdd} disabled={count >= guestCapacity}>
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
  background-color: ${(props) =>
    props.disabled ? colors.gray10 : colors.point04};
  padding: 5px;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Text = styled.div``;
