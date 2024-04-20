import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../Common/ModalContainer";

const CancelModal = ({ setIsOpen, data }) => {
  const [cancelReason, setCancelReason] = useState("");
  const { paymentKey } = data;

  const navigate = useNavigate();
  const token = localStorage.getItem("refresh_token");

  const handleClose = () => {
    setIsOpen(false);
  };
  const requestBody = {
    cancelReason: cancelReason,
  };

  const cancelPayment = async () => {
    try {
      await axios.post(`/payment/toss/cancel/${paymentKey}`, requestBody, {
        headers: {
          Authorization: token,
        },
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const handleCancel = async () => {
    try {
      await cancelPayment();
      setIsOpen(false);
      alert("예약이 취소되었습니다.");
      navigate(`/my/reservations`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ModalContainer>
      <ConfirmText>예약을 취소하시겠습니까?</ConfirmText>
      <Dropdown
        value={cancelReason}
        onChange={(e) => setCancelReason(e.target.value)}
      >
        <option value="">취소 사유를 선택하세요</option>
        <option value="단순 변심">단순 변심</option>
        <option value="계획 변경">계획 변경</option>
        <option value="긴급 재난">긴급 재난</option>
        <option value="기타">기타</option>
      </Dropdown>
      <BtnWrapper>
        <YesBtn disabled={!cancelReason} onClick={handleCancel}>
          확인
        </YesBtn>
        <NoBtn onClick={handleClose}>취소</NoBtn>
      </BtnWrapper>
    </ModalContainer>
  );
};

export default CancelModal;

const ConfirmText = styled.p``;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const YesBtn = styled.button`
  all: unset;
  text-align: center;
  flex: 1;
  background-color: ${colors.point01};
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  color: ${colors.white};
  &:disabled {
    background-color: ${colors.gray30};
    cursor: not-allowed;
  }
  &:hover {
    background-color: ${colors.hover01};
  }
`;

const NoBtn = styled(YesBtn)`
  background: none;
  border: 1px solid ${colors.dark};
  color: ${colors.dark};
  &:hover {
    background-color: ${colors.gray10};
  }
`;
const Dropdown = styled.select`
  padding: 4px 0px;
  border-radius: 8px;
  border: 1px solid ${colors.gray30};
  width: 100%;
  &:hover {
    border: 1px solid ${colors.point01};
  }
  &:focus {
    border: 1px solid ${colors.point01};
  }
`;
