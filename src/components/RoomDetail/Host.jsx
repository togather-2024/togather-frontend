import React from "react";
import styled from "@emotion/styled";
import { CgProfile } from "react-icons/cg";
import { size, weight } from "../../styles/fonts";
import { colors } from "../../styles/colors";
import profile from "../../assets/profile.png";

const Host = ({ data }) => {
  return (
    <HostContainer>
      <Subheading>호스트</Subheading>
      <HostProfile>
        {data?.profilePicFile ? (
          <ProfileImg src={data?.profilePicFile} />
        ) : (
          <ProfileImg src={profile} size={30} />
        )}
        <HostName>{data?.memberName}</HostName>
        <Text>호스트에게 문의하기 💌</Text>
      </HostProfile>
    </HostContainer>
  );
};

export default Host;
const HostContainer = styled.div`
  border: 3px solid ${colors.point01};
  border-radius: 30px;
  padding: 30px 20px;
`;

const HostProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const HostName = styled.div`
  font-weight: ${weight.semibold};
`;

const Text = styled.div`
  color: ${colors.dark};
  margin-left: auto;
  cursor: pointer;
`;

const Subheading = styled.div`
  font-size: ${size.h4};
  font-weight: ${weight.semibold};
  margin-bottom: 16px;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;
