import styled from "@emotion/styled";
import React, { useState } from "react";
import { size, weight } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";
import ReviewItem from "../../RoomDetail/Review/ReviewItem";
import GetMyReview from "./GetMyReview";
import LoadingContainer from "../../Common/LoadingContainer";

const Review = () => {
  const [loading, setLoading] = useState(true);
  const data = GetMyReview({ setLoading });
  const reviewList = data?.map((item, index) => {
    return (
      <React.Fragment key={item.reviewId}>
        <ReviewItem data={item} />
        {index !== data.length - 1 && <Line />}
      </React.Fragment>
    );
  });
  return (
    <Container>
      <ReviewHeading>이용 후기</ReviewHeading>
      <ReviewCount>{data?.length} 건</ReviewCount>
      <BoldLine />
      {loading ? <LoadingContainer /> : <ReviewList>{reviewList}</ReviewList>}
    </Container>
  );
};

export default Review;

const Container = styled.div`
  margin-bottom: 40px;
`;

const ReviewHeading = styled.div`
  font-size: ${size.h4};
  font-weight: ${weight.semibold};
  margin-bottom: 20px;
  display: inline-block;
  margin-right: 16px;
`;

const ReviewCount = styled.span`
  color: ${colors.gray30};
`;
const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Line = styled.div`
  border: 0.5px solid ${colors.gray10};
`;

const BoldLine = styled.div`
  border: 1px solid ${colors.black};
  margin-bottom: 16px;
`;
