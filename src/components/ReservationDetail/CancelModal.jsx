import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { size } from "../../styles/fonts";

const CancelModal = () => {
  return (
    <ModalBackdrop>
      <Container>
        <ConfirmText>예약을 취소하시겠습니까?</ConfirmText>
        <BtnWrapper>
          <YesBtn>확인</YesBtn>
          <NoBtn>취소</NoBtn>
        </BtnWrapper>
      </Container>
    </ModalBackdrop>
  );
};

export default CancelModal;
//팝업 열었을때 페이지(!==모달) 컨테이너에 overflow:hidden 적용
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
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
