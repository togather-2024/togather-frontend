import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { size, weight } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";
import profile from "../../../assets/profile.png";

const ReviewItem = ({ data }) => {
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
  console.log(createdDateString);
  const reviewContent = data?.reviewDesc;

  const reviewer = data?.reviewer?.email;
  return (
    <Review>
      <ReviewInfo>
        <ReviewProfile>
          <ProfileImg src={profile} alt="profile" /> {reviewer}
        </ReviewProfile>
        <CreatedAt>{formatDate(createdDateString)}</CreatedAt>
      </ReviewInfo>
      <UsedAt>{formatDate(usedDateString)} 이용</UsedAt>
      <ReviewContent>{reviewContent}</ReviewContent>
    </Review>
  );
};

export default ReviewItem;

const Review = styled.div``;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: center;
`;

const ReviewProfile = styled.div`
  font-weight: ${weight.medium};
  display: flex;
`;

const CreatedAt = styled.div`
  font-size: ${size.caption};
`;

const UsedAt = styled(CreatedAt)`
  margin-bottom: 24px;
  color: ${colors.gray30};
`;

const ReviewContent = styled.div``;

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
