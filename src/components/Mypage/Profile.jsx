import styled from "@emotion/styled";
import React from "react";
import { colors } from "../../styles/colors";
import { weight } from "../../styles/fonts";

const Profile = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <InfoLabel>사진</InfoLabel>
        <ProfileImg></ProfileImg>
        <EditBtn>사진 변경</EditBtn>
      </InfoWrapper>
      <InfoWrapper>
        <InfoLabel>이름</InfoLabel>
        <InfoText>홍길동</InfoText>
        <EditBtn>이름 변경</EditBtn>
      </InfoWrapper>
      <InfoWrapper>
        <InfoLabel>이메일</InfoLabel>
        <InfoText>hello.gmail.com</InfoText>
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

const ProfileImg = styled.div`
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
