import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { size, weight } from "../../../styles/fonts";
import { updateName } from "../../../api/api";
import { getUserInfo } from "../../../api/api";
import { useSetRecoilState } from "recoil";
import { profileInfoState } from "../../../recoil/atoms/profileState";

const NameContainer = ({ memberName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(null);
  const setProfileInfo = useSetRecoilState(profileInfoState);

  useEffect(() => {
    setName(memberName);
  }, [memberName]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = async () => {
    try {
      if (name !== memberName) {
        await updateName(name);
      }
      setIsEditing(false);
      const userInfo = await getUserInfo();
      setProfileInfo(userInfo.data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <InfoWrapper>
      <InfoLabel>이름</InfoLabel>
      <InfoText>
        {!isEditing ? (
          name
        ) : (
          <EditInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          ></EditInput>
        )}
      </InfoText>
      {isEditing ? (
        <SubmitBtn onClick={handleSubmit}>저장</SubmitBtn>
      ) : (
        <EditBtn onClick={handleEdit}>이름 변경</EditBtn>
      )}
    </InfoWrapper>
  );
};

export default NameContainer;
const InfoWrapper = styled.div`
  display: flex;
  padding: 40px;
  border-bottom: 1px solid ${colors.gray10};
  align-items: center;
`;

const InfoText = styled.p`
  font-weight: ${weight.semibold};
  margin-left: 120px;
`;

const InfoLabel = styled.p`
  width: 80px;
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

const SubmitBtn = styled(EditBtn)`
  background-color: ${colors.point02};
  color: white;
  border: none;
  &:hover {
    background-color: ${colors.point01};
  }
`;

const EditInput = styled.input`
  font-size: ${size.body01};
  outline: none;
  border: none;
  background-color: ${colors.hover01};
  padding: 8px;
  border-radius: 10px;
`;
