import React from "react";
import styled from "styled-components";
import { size, weight } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";
import ReviewItem from "./ReviewItem";

const ReviewContainer = () => {
  return (
    <Container>
      <ReviewHeading>이용 후기</ReviewHeading>
      <ReviewCount>n 건</ReviewCount>
      <ReviewList>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </ReviewList>
    </Container>
  );
};

export default ReviewContainer;

const Container = styled.div`
  margin-bottom: 40px;
`;

const ReviewHeading = styled.div`
  font-size: ${size.h4};
  font-weight: ${weight.semibold};
  margin-bottom: 16px;
  display: inline-block;
  margin-right: 16px;
`;

const ReviewCount = styled.span`
  color: ${colors.gray30};
`;
const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
