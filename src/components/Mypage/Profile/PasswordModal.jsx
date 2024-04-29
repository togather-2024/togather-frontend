import { useState } from "react";
import ModalContainer from "../../Common/ModalContainer";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { size } from "../../../styles/fonts";
import { updatePassword } from "../../../api/api";

const PasswordModal = ({ setIsOpen }) => {
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const regex = /\d/g;
  const matches = newPassword.match(regex);

  const requestBody = {
    previousPassword: previousPassword,
    newPassword: newPassword,
    confirmNewPassword: confirmPassword,
  };

  const handleUpdate = async () => {
    try {
      const res = await updatePassword(requestBody);
      if (res.data !== "ok") {
        alert(res.data.message);
      } else {
        alert("비밀번호가 변경되었습니다.");
      }
      setIsOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <ModalContainer>
      <InputWrapper>
        <Label htmlFor="previousPw">현재 비밀번호</Label>
        <PasswordInput
          type="password"
          name="previousPw"
          value={previousPassword}
          onChange={(e) => setPreviousPassword(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="newPw">새 비밀번호</Label>
        <PasswordInput
          type="password"
          name="newPw"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </InputWrapper>
      {previousPassword === newPassword && previousPassword !== "" ? (
        <ErrorMessage>현재 비밀번호와 동일합니다.</ErrorMessage>
      ) : (
        ""
      )}
      {newPassword === "" ||
      (newPassword?.length >= 6 && matches?.length >= 3) ? (
        ""
      ) : (
        <ErrorMessage>
          올바르지 않은 비밀번호 형식입니다. (숫자3개를 포함한 6자리)
        </ErrorMessage>
      )}
      <InputWrapper>
        <Label htmlFor="confirm">새 비밀번호 확인</Label>
        <PasswordInput
          type="password"
          name="confirm"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </InputWrapper>
      {confirmPassword !== 0 || newPassword === confirmPassword ? (
        ""
      ) : (
        <ErrorMessage>새 비밀번호가 일치하지 않습니다.</ErrorMessage>
      )}
      <BtnWrapper>
        <SaveButton onClick={handleUpdate}>저장</SaveButton>
        <CancelButton onClick={handleClose}>취소</CancelButton>
      </BtnWrapper>
    </ModalContainer>
  );
};

export default PasswordModal;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 24px;
`;

const PasswordInput = styled.input`
  font-size: ${size.body01};
  outline: none;
  border: 1px solid ${colors.point02};
  background-color: ${colors.hover01};
  padding: 8px;
  border-radius: 10px;
  width: 180px;
`;
const Label = styled.label`
  flex: 1;
  text-align: left;
  color: ${colors.dark};
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 30px;
`;

const SaveButton = styled.button`
  all: unset;
  flex: 1;
  background-color: ${colors.point02};
  color: ${colors.white};
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.point01};
  }
`;

const CancelButton = styled(SaveButton)`
  flex: 1;
  background-color: transparent;
  color: ${colors.point01};
  border: 1px solid ${colors.point01};
  &:hover {
    background-color: ${colors.hover01};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: ${size.caption};
  margin-left: auto;
  margin-top: -12px;
`;
