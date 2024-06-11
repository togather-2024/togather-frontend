import ModalContainer from "../../Common/ModalContainer";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

const SwitchRoleModal = ({ setIsOpen, handleSwitch }) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <ModalContainer>
      <Wrapper>
        <TextWrapper>
          <Text>호스트 계정으로 전환하시겠습니까?</Text>
          <Text>(호스트 계정은 숙소 등록이 가능해요)</Text>
        </TextWrapper>
        <BtnWrapper>
          <YesBtn onClick={handleSwitch}>확인</YesBtn>
          <NoBtn onClick={handleClose}>취소</NoBtn>
        </BtnWrapper>
      </Wrapper>
    </ModalContainer>
  );
};

export default SwitchRoleModal;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
const Text = styled.p`
  color: ${colors.dark};
`;

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
    background-color: ${colors.hover01};
  }
`;
