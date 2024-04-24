import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { size, weight } from "../../../styles/fonts";
import { updateName } from "../../../api/api";

const NameContainer = ({ memberName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(null);

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
  height: fit-content;
  margin-left: auto;
  width: 100px;
  text-align: center;
  padding: 6px 2px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${colors.black};
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
