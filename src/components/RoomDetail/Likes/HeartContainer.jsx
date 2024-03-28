import React from "react";
import styled from "@emotion/styled";
import { FaHeart } from "react-icons/fa";

const HeartContainer = () => {
  return (
    <Container>
      <FaHeart size="15" color="#ABABAB" />
    </Container>
  );
};

export default HeartContainer;

const Container = styled.div`
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  background-color: white;
  margin-right: 10px;
  cursor: pointer;
`;
