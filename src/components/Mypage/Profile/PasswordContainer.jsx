import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { weight } from "../../../styles/fonts";
import PasswordModal from "./PasswordModal";

const PasswordContainer = () => {
  const [isopen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      {isopen ? <PasswordModal setIsOpen={setIsOpen} /> : ""}
      <InfoWrapper>
        <InfoLabel>비밀번호</InfoLabel>
        <InfoText>*******</InfoText>
        <EditBtn onClick={handleOpen}>비밀번호 변경</EditBtn>
      </InfoWrapper>
    </>
  );
};

export default PasswordContainer;

const InfoWrapper = styled.div`
  display: flex;
  padding: 40px;
  border-bottom: 1px solid ${colors.gray10};
  align-items: center;
`;

const InfoLabel = styled.p`
  width: 80px;
`;

const InfoText = styled.p`
  font-weight: ${weight.semibold};
  margin-left: 120px;
`;

const EditBtn = styled.button`
  all: unset;
  color: ${colors.white};
  margin-left: auto;
  padding: 8px 10px;
  border-radius: 30px;
  cursor: pointer;
  background-color: ${colors.gray50};
  &:hover {
    background-color: ${colors.gray30};
  }
`;
