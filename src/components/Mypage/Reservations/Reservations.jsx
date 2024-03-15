import React, { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import ReservationItem from "./ReservationItem";

const Reservations = () => {
  const [active, setActive] = useState("all");
  const reservationData = Array(5)
    .fill(0)
    .map((_, idx) => idx + 1);

  const reservationList = reservationData?.map((list, idx) => (
    <ReservationItem key={idx} />
  ));
  return (
    <Wrapper>
      <Nav>
        <Menu active={active === "all"} onClick={() => setActive("all")}>
          전체
        </Menu>
        <Menu
          active={active === "reservated"}
          onClick={() => setActive("reservated")}
        >
          완료된 예약
        </Menu>
        <Menu
          active={active === "canceled"}
          onClick={() => setActive("canceled")}
        >
          취소된 예약
        </Menu>
      </Nav>
      <ListContainer>{reservationList}</ListContainer>
    </Wrapper>
  );
};

export default Reservations;

const Wrapper = styled.div``;

const Nav = styled.ul`
  padding: 10px 0 0 10px;
  border-bottom: 1px solid ${colors.gray30};
  display: flex;
`;

const Menu = styled.li`
  cursor: pointer;
  padding: 7px 32px;
  border-bottom: ${({ active }) => (active ? "2px solid black" : "none")};
`;

const ListContainer = styled.ul`
  margin-top: 20px;
`;
