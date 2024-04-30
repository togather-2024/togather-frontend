import React, { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

const TimeItem = ({ data, handleClick, selected, isAvailable }) => {
  const handleClickIfAvailable = () => {
    if (isAvailable) {
      handleClick();
    }
  };

  return (
    <Button
      onClick={handleClickIfAvailable}
      selected={selected}
      isAvailable={isAvailable}
    >
      {data}
    </Button>
  );
};

export default TimeItem;
const Button = styled.button`
  all: unset;
  border: 1px solid
    ${(props) => (props.isAvailable ? colors.point01 : colors.white)};
  padding: 8px;
  border-radius: 10px;
  cursor: ${(props) => (props.isAvailable ? "pointer" : "")};
  background-color: ${(props) =>
    props.isAvailable ? (props.selected ? colors.hover01 : "") : colors.gray10};
  &:hover {
    background-color: ${(props) => (props.isAvailable ? colors.hover01 : "")};
  }
`;
