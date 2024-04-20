import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { colors } from "../../styles/colors";
import { FaHeart } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaPen } from "react-icons/fa";

const Sidebar = ({ active }) => {
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    navigate(`/my/${menu}`); // 해당 메뉴에 대한 URL로 이동
  };

  return (
    <Wrapper>
      <List>
        <Menu
          active={active === "favorites"}
          onClick={() => handleMenuClick("favorites")}
        >
          <FaHeart />
          찜한 숙소
        </Menu>
        <Menu
          active={active === "messages"}
          onClick={() => handleMenuClick("messages")}
        >
          <AiFillMessage />
          메시지
        </Menu>
        <Menu
          active={active === "reservations"}
          onClick={() => handleMenuClick("reservations")}
        >
          <FaCalendarCheck />
          예약관리
        </Menu>
        <Menu
          active={active === "review"}
          onClick={() => handleMenuClick("review")}
        >
          <FaPen />
          리뷰관리
        </Menu>
        <Menu
          active={active === "profile"}
          onClick={() => handleMenuClick("profile")}
        >
          <IoMdPerson />내 정보
        </Menu>
      </List>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Menu = styled.li`
  width: 120px;
  padding: 10px;
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${({ active }) =>
    active ? colors.hover01 : "transparent"};
  &:hover {
    font-size: 1.05rem;
  }
`;
