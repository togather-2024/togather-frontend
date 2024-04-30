import React from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Mypage/Sidebar";
import Reservations from "../components/Mypage/Reservations/Reservations";
import Profile from "../components/Mypage/Profile/Profile";
import Review from "../components/Mypage/Review/Review";
import Bookmark from "../components/Mypage/Bookmark/Bookmark";

const Mypage = () => {
  const { menu } = useParams();
  const activeMenu = menu || "bookmark";
  return (
    <Wrapper>
      <LeftWrapper>
        <Sidebar active={activeMenu} />
      </LeftWrapper>
      <RightWrapper>
        {activeMenu === "bookmark" && <Bookmark />}
        {activeMenu === "reservations" && <Reservations />}
        {activeMenu === "profile" && <Profile />}
        {activeMenu === "review" && <Review />}
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
