import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { keyframes } from "@emotion/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CancelModal = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const { reservationId } = useParams();
  const token = localStorage.getItem("refresh_token");
  function handleClose() {
    setIsOpen(false);
  }
  const handleCancel = async () => {
    try {
      await axios.delete(`/partyroom/reservation/${Number(reservationId)}`, {
        headers: { Authoration: token },
      });
      setIsOpen(false);
      alert("예약이 취소되었습니다.");
      navigate(`/my/reservations`);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <ModalBackdrop>
      <Container>
        <ConfirmText>예약을 취소하시겠습니까?</ConfirmText>
        <BtnWrapper>
          <YesBtn onClick={handleCancel}>확인</YesBtn>
          <NoBtn onClick={handleClose}>취소</NoBtn>
        </BtnWrapper>
      </Container>
    </ModalBackdrop>
  );
};

export default CancelModal;

const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} ease-in-out 0.2s;
  z-index: 1;
`;
const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 20px;
  width: 400px;
  height: 200px;
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const ConfirmText = styled.p``;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const YesBtn = styled.button`
  all: unset;
  background-color: ${colors.point01};
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  color: ${colors.white};
  &:hover {
    background-color: ${colors.hover01};
  }
`;

const NoBtn = styled(YesBtn)`
  background-color: ${colors.white};
  border: 1px solid ${colors.gray30};
  color: ${colors.black};
  &:hover {
    background-color: ${colors.gray10};
  }
`;
