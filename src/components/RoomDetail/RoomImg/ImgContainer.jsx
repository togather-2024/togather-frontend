import React from "react";
import styled from "@emotion/styled";
import HeartContainer from "../Likes/HeartContainer";
import { colors } from "../../../styles/colors";

const ImgContainer = () => {
  return (
    <Container>
      <HeartContainer />
      <FirstImg></FirstImg>
      <SmallImgContainer>
        <SmallImg />
        <SmallImg />
        <SmallImg />
        <SmallImg />
      </SmallImgContainer>
    </Container>
  );
};

export default ImgContainer;

const Container = styled.div`
  margin: 32px 0;
  display: flex;
  position: relative;
  height: 400px;
  gap: 10px;
`;

const FirstImg = styled.div`
  background-color: ${colors.gray30};
  flex-grow: 1;
  border-radius: 10px;
`;
const SmallImgContainer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
const SmallImg = styled.div`
  background-color: ${colors.gray30};
  border-radius: 10px;
`;
