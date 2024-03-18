import React, { useState } from "react";
import styled from "@emotion/styled";
import Sidebar from "../components/Mypage/Sidebar";
import Favorites from "../components/Mypage/Favorites";
import Reservations from "../components/Mypage/Reservations/Reservations";
import Profile from "../components/Mypage/Profile";

const Mypage = () => {
  const [active, setActive] = useState("favorites");
  return (
    <Wrapper>
      <LeftWrapper>
        <Sidebar active={active} setActive={setActive} />
      </LeftWrapper>
      <RightWrapper>
        {active === "favorites" && <Favorites />}
        {active === "reservations" && <Reservations />}
        {active === "profile" && <Profile />}
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
