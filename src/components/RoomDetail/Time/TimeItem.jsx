import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

const TimeItem = ({ data, handleClick, selected }) => {
  return (
    <Button onClick={handleClick} selected={selected}>
      {data}
    </Button>
  );
};

export default TimeItem;
const Button = styled.button`
  all: unset;
  border: 1px solid ${colors.point01};
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? colors.hover01 : "")};
  &:hover {
    background-color: ${colors.point01};
  }
`;
