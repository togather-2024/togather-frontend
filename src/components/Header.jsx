import styled from "@emotion/styled";
import { CgProfile } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { colors } from "../styles/colors";
import { size } from "../styles/fonts";

const Header = () => {
  const login = false;
  return (
    <>
      <Block>
        <Logo src="./images/logo.png" alt="logo" />
        {!login ? (
          <RightDiv>
            <Menu>숙소 등록</Menu>
            <Menu>로그인</Menu>
            <Menu>회원가입</Menu>
          </RightDiv>
        ) : (
          <RightDiv>
            <Menu>숙소 등록</Menu>
            <Menu>
              <CgProfile /> 000 님
            </Menu>
            <Menu>
              <FaBell />
            </Menu>
          </RightDiv>
        )}
      </Block>
    </>
  );
};

export default Header;

const Block = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.gray10};
  height: 7vh;
  width: 100%;
`;

const RightDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  margin-left: auto;
`;
const Menu = styled.div`
  display: flex;
  gap: 6px;
  color: ${colors.black};
  border-radius: 10px;
  font-size: ${size.body01};
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.hover01};
  }
`;

const Logo = styled.img`
  height: 50%;
  cursor: pointer;
`;
