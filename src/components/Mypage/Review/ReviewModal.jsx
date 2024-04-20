import { useState } from "react";
import ModalContainer from "../../Common/ModalContainer";
import { IoClose } from "react-icons/io5";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { size, weight } from "../../../styles/fonts";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ReviewModal = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const { reservationId } = useParams();

  const token = localStorage.getItem("refresh_token");
  const [review, setReview] = useState("");
  const handleClose = () => {
    setIsOpen(false);
  };

  const params = {
    partyRoomReservationId: Number(reservationId),
    reviewDesc: review,
  };
  const handleCreateReview = async () => {
    try {
      await axios.post(`api/review/register`, {
        headers: { Authorization: token },
        params: params,
      });
      setIsOpen(false);
      setReview("");
      alert("리뷰 등록 성공");
      navigate(`/my/review`);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <ModalContainer>
      <CloseWrapper onClick={handleClose}>
        <IoClose size={20} />
      </CloseWrapper>
      <Title>리뷰 작성</Title>
      <TextArea
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></TextArea>
      <ButtonWrapper>
        <RegisterBtn onClick={handleCreateReview}>등록하기</RegisterBtn>
        <NoBtn onClick={handleClose}>취소</NoBtn>
      </ButtonWrapper>
    </ModalContainer>
  );
};

export default ReviewModal;

const CloseWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 12px;
`;
const Title = styled.h1`
  font-size: ${size.h4};
  font-weight: ${weight.semibold};
`;

const TextArea = styled.textarea`
  border: 1.5px solid ${colors.point02};
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  width: 500px;
  height: 100px;
  resize: none;
  border-radius: 10px;
  outline-color: ${colors.point01};
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-left: auto;
`;
const RegisterBtn = styled.button`
  all: unset;
  text-align: center;
  background-color: ${colors.point01};
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  color: ${colors.white};
  &:hover {
    background-color: ${colors.hover01};
  }
`;
const NoBtn = styled(RegisterBtn)`
  background: none;
  border: 1px solid ${colors.dark};
  color: ${colors.dark};
  &:hover {
    background-color: ${colors.gray10};
  }
`;
