import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";

const Container = styled.div`
  width: 150px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  padding: 0.7rem 0;
  position: absolute;
  background-color: white;

  // dropdown 위치 해당 부분 수정
  top: 50px;
  right: 5vw;
  z-index: 2;
`;
const Box = styled.div`
  color: ${colors.dark};
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  cursor: pointer;
  &:hover {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const ProfileDropdown = () => {
  // const arr = ["찜한 목록", "메시지", "예약 관리", "내 정보", "로그아웃"];
  const links = {
    "찜한 목록": "/my/favorites",
    메시지: "/my/messages",
    "예약 관리": "/my/reservations",
    "내 정보": "my/profile",
    로그아웃: null,
  };
  return (
    <Container>
      {Object.entries(links).map(([label, path], index) => (
        <Link to={path} key={index}>
          <Box>{label}</Box>
        </Link>
      ))}
    </Container>
  );
};

export default ProfileDropdown;
