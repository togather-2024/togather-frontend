import { useState } from "react";
import ModalContainer from "../../Common/ModalContainer";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { size } from "../../../styles/fonts";
import { deleteAccount } from "../../../api/api";
import { useSetRecoilState } from "recoil";
import { loginState } from "../../../recoil/atoms/loginState";

const DeleteAccountModal = ({ setIsOpen }) => {
  const setIsLoggedIn = useSetRecoilState(loginState);
  const [password, setPassword] = useState("");
  console.log(password);
  const handleClose = () => {
    setIsOpen(false);
  };
  const requestBody = { password: password };
  const handleDelete = async () => {
    try {
      const res = await deleteAccount(requestBody);
      if (res.data !== "ok") {
        alert(res.data.message);
      } else {
        setIsLoggedIn(false);
        localStorage.clear();
        window.location.replace("/");
        alert("회원 탈퇴 완료.");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ModalContainer>
      <Wrapper>
        <TextWrapper>
          <Text>정말 탈퇴하시겠습니까?</Text>
          <Text>탈퇴하시려면 비밀번호를 입력하세요.</Text>
        </TextWrapper>
        <PasswordInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <BtnWrapper>
          <YesBtn onClick={handleDelete}>탈퇴</YesBtn>
          <NoBtn onClick={handleClose}>취소</NoBtn>
        </BtnWrapper>
      </Wrapper>
    </ModalContainer>
  );
};

export default DeleteAccountModal;
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
const Text = styled.p``;

const PasswordInput = styled.input`
  font-size: ${size.body01};
  outline: none;
  border: 1px solid ${colors.point02};
  background-color: ${colors.hover01};
  padding: 8px;
  border-radius: 10px;
  width: 180px;
  align-self: center;
  width: 100%;
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
