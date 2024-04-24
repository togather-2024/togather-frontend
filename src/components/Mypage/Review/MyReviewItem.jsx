import { useState } from "react";
import styled from "styled-components";
import { size, weight } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";
import { editReview } from "../../../api/api";
import ReviewDeleteModal from "./ReviewDeleteModal";
import { useNavigate } from "react-router-dom";

const MyReviewItem = ({ data }) => {
  const navigate = useNavigate();
  const [review, setReview] = useState(data);
  const reviewContent = review?.reviewDesc;
  const [editing, setEditing] = useState(false);
  const [editContent, setEditContent] = useState(reviewContent);
  const [isOpen, setIsOpen] = useState(false);
  const { partyRoomId } = data?.partyRoomDto;

  const goToRoomDetail = () => {
    navigate(`/detail/${partyRoomId}`);
  };
  const handleStartEdit = () => {
    setEditing(true);
  };

  const handleFocus = (e) => {
    const target = e.target;
    const length = target.value.length;
    target.setSelectionRange(length, length);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const { reviewId } = data;
  const params = { reviewDesc: editContent };

  const handleSubmitEdit = async () => {
    try {
      if (review !== editContent) {
        await editReview(params, reviewId);
        setReview(
          review.reviewId === reviewId
            ? { ...review, reviewDesc: editContent }
            : review
        );
      }
      setEditing(false);
    } catch (e) {
      console.error(e);
    }
  };

  function formatDate(inputDateString) {
    const date = new Date(inputDateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${year}.${month < 10 ? "0" + month : month}.${day < 10 ? "0" + day : day}`;

    return formattedDate;
  }
  const usedDateString = review?.partyRoomReservationDto?.endTime;
  const createdDateString = review?.createdAt;

  const partyRoomName = review?.partyRoomDto?.partyRoomName;

  return (
    <Review>
      {isOpen ? (
        <ReviewDeleteModal
          setIsOpen={setIsOpen}
          reviewId={reviewId}
          setReview={setReview}
          review={review}
        />
      ) : (
        ""
      )}
      <ReviewInfo>
        <PartyRoomName onClick={goToRoomDetail}>{partyRoomName}</PartyRoomName>
        <CreatedAt>{formatDate(createdDateString)}</CreatedAt>
      </ReviewInfo>
      <UsedAt>{formatDate(usedDateString)} 이용</UsedAt>
      {!editing ? (
        <ReviewContent>{reviewContent}</ReviewContent>
      ) : (
        <EditArea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          autoFocus
          onFocus={handleFocus}
        ></EditArea>
      )}
      <ButtonWrapper>
        <Button
          type={editing ? "submit" : "edit"}
          onClick={editing ? handleSubmitEdit : handleStartEdit}
        >
          {editing ? "등록" : "수정"}
        </Button>
        <Button onClick={handleOpen}>삭제</Button>
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
  background: ${(props) =>
    props.type === "submit" ? colors.point02 : colors.gray10};
  color: ${(props) => (props.type === "submit" ? colors.white : colors.gray50)};
  padding: 8px 10px;
  border-radius: 8px;
  font-size: ${size.caption};
  cursor: pointer;
  &:hover {
    background-color: ${colors.hover02};
  }
`;

const EditArea = styled.textarea`
  resize: none;
  width: 300px;
  border: none;
  outline: none;
`;
