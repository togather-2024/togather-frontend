import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { size, weight } from "../../../styles/fonts";

const ReviewItem = () => {
  return (
    <Review>
      <ReviewInfo>
        <ReviewProfile>
          <CgProfile /> 000
        </ReviewProfile>
        <CreatedAt>YYYY-MM-DD 이용</CreatedAt>
      </ReviewInfo>
      <ReviewContent>
        이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기
      </ReviewContent>
    </Review>
  );
};

export default ReviewItem;

const Review = styled.div``;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ReviewProfile = styled.div`
  font-weight: ${weight.medium};
`;

const CreatedAt = styled.div`
  font-size: ${size.caption};
`;

const ReviewContent = styled.div``;
