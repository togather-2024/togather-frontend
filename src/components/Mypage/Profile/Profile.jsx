import styled from "@emotion/styled";
import React from "react";
import { colors } from "../../../styles/colors";
import { weight } from "../../../styles/fonts";
import useFetchUserInfo from "../../../hooks/useFetchUserInfo";
import NameContainer from "./NameContainer";
import ImageContainer from "./ImageContainer";
import PasswordContainer from "./PasswordContainer";

const Profile = () => {
  const token = localStorage.getItem("refresh_token");
  const data = useFetchUserInfo(token);
  console.log(data);
  const memberName = data?.memberName;
  const email = data?.email;

  return (
    <Wrapper>
      <ImageContainer />
      <NameContainer memberName={memberName} />
      <InfoWrapper>
        <InfoLabel>이메일</InfoLabel>
        <InfoText>{email}</InfoText>
      </InfoWrapper>
      <PasswordContainer />
      <LeaveBtn>회원 탈퇴</LeaveBtn>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  border-top: 3px solid ${colors.point03};
`;

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
  color: ${colors.gray50};
  height: fit-content;
  margin-left: auto;
  width: 100px;
  border: 1px solid ${colors.gray50};
  text-align: center;
  padding: 6px 2px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray10};
  }
`;

const LeaveBtn = styled.button`
  all: unset;
  color: ${colors.gray30};
  text-decoration: underline;
  width: fit-content;
  display: flex;
  margin-left: auto;
  margin-right: 20px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 40px;
`;
