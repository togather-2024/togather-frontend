import React from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Mypage/Sidebar";
import Favorites from "../components/Mypage/Favorites";
import Reservations from "../components/Mypage/Reservations/Reservations";
import Profile from "../components/Mypage/Profile";

const Mypage = () => {
  const { menu } = useParams();
  const activeMenu = menu || "favorites";
  return (
    <Wrapper>
      <LeftWrapper>
        <Sidebar active={activeMenu} />
      </LeftWrapper>
      <RightWrapper>
        {activeMenu === "favorites" && <Favorites />}
        {activeMenu === "reservations" && <Reservations />}
        {activeMenu === "profile" && <Profile />}
      </RightWrapper>
    </Wrapper>
  );
};

export default Mypage;
const Wrapper = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 50px;
`;
const LeftWrapper = styled.div``;

const RightWrapper = styled.div`
  flex: 1;
`;
