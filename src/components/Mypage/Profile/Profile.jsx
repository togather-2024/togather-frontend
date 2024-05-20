import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../../../styles/colors";
import { weight } from "../../../styles/fonts";
import NameContainer from "./NameContainer";
import ImageContainer from "./ImageContainer";
import PasswordContainer from "./PasswordContainer";
import DeleteAccountModal from "./DeleteAccountModal";
import { useRecoilValue } from "recoil";
import { profileInfoState } from "../../../recoil/atoms/profileState";

const Profile = () => {
  const [isopen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const data = useRecoilValue(profileInfoState);
  const memberName = data?.memberName;
  const email = data?.email;
  const profilePic = data?.profilePicFile;

  return (
    <Wrapper>
      <ImageContainer profilePic={profilePic} />
      <NameContainer memberName={memberName} />
      <InfoWrapper>
        <InfoLabel>이메일</InfoLabel>
        <InfoText>{email}</InfoText>
      </InfoWrapper>
      <PasswordContainer />
      <LeaveBtn onClick={handleOpen}>회원 탈퇴</LeaveBtn>
      {isopen ? <DeleteAccountModal setIsOpen={setIsOpen} /> : ""}
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
