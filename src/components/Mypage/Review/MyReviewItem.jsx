import React from "react";
import styled from "styled-components";
import { size, weight } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";
import profile from "../../../assets/profile.png";

const MyReviewItem = ({ data }) => {
  function formatDate(inputDateString) {
    const date = new Date(inputDateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${year}.${month < 10 ? "0" + month : month}.${day < 10 ? "0" + day : day}`;

    return formattedDate;
  }
  const usedDateString = data?.partyRoomReservationDto?.endTime;
  const createdDateString = data?.createdAt;
  const reviewContent = data?.reviewDesc;

  const { partyRoomName } = data?.partyRoomDto;

  return (
    <Review>
      <ReviewInfo>
        <PartyRoomName>{partyRoomName}</PartyRoomName>
        <CreatedAt>{formatDate(createdDateString)}</CreatedAt>
      </ReviewInfo>
      <UsedAt>{formatDate(usedDateString)} 이용</UsedAt>
      <ReviewContent>{reviewContent}</ReviewContent>
      <ButtonWrapper>
        <Button>수정</Button>
        <Button>삭제</Button>
      </ButtonWrapper>
    </Review>
  );
};

export default MyReviewItem;

const Review = styled.div``;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: center;
`;

const CreatedAt = styled.div`
  font-size: ${size.caption};
`;

const UsedAt = styled(CreatedAt)`
  margin-bottom: 24px;
  color: ${colors.gray30};
`;

const ReviewContent = styled.div``;

const PartyRoomName = styled.p`
  font-size: ${size.h4};
  font-weight: ${weight.semibold};
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 6px;
  margin-top: 20px;
  margin-left: auto;
`;
const Button = styled.button`
  all: unset;
  background: ${colors.gray10};
  color: ${colors.gray50};
  padding: 8px 10px;
  border-radius: 8px;
  font-size: ${size.caption};
  cursor: pointer;
  &:hover {
    background-color: ${colors.hover02};
  }
`;
