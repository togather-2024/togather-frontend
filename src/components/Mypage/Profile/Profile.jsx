import styled from "@emotion/styled";
import React from "react";
import { colors } from "../../../styles/colors";
import { weight } from "../../../styles/fonts";
import useFetchUserInfo from "../../../hooks/useFetchUserInfo";
import profile from "../../../assets/profile.png";
import NameContainer from "./NameContainer";

const Profile = () => {
  const token = localStorage.getItem("refresh_token");
  const data = useFetchUserInfo(token);
  const memberName = data?.memberName;
  const email = data?.email;

  return (
    <Wrapper>
      <InfoWrapper>
        <InfoLabel>프로필 사진</InfoLabel>
        <ProfileImg src={profile} alt="프로필이미지(기본)"></ProfileImg>
        <EditBtn>사진 변경</EditBtn>
      </InfoWrapper>
      {/* <InfoWrapper>
        <InfoLabel>이름</InfoLabel>
        <InfoText>{memberName}</InfoText>
        <EditBtn>이름 변경</EditBtn>
      </InfoWrapper> */}
      <NameContainer memberName={memberName} />
      <InfoWrapper>
        <InfoLabel>이메일</InfoLabel>
        <InfoText>{email}</InfoText>
      </InfoWrapper>
      <InfoWrapper>
        <InfoLabel>비밀번호</InfoLabel>
        <InfoText>*******</InfoText>
        <EditBtn>비밀번호 변경</EditBtn>
      </InfoWrapper>
      <LeaveBtn>회원 탈퇴</LeaveBtn>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  border-top: 3px solid ${colors.point03};
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: ${colors.gray30};
  border-radius: 50%;
  margin-left: 120px;
`; //추후 img로 변경

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
