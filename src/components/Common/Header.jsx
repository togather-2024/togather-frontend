import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { colors } from "../../styles/colors";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atoms/loginState";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  return (
    <Block>
      <Link to={`/`}>
        <Logo src={logo} alt="logo" />
      </Link>
      {!isLoggedIn ? (
        <RightDiv>
          <Link to={`/registration`}>
            <Menu>숙소 등록</Menu>
          </Link>
          <Link to={`/signin`}>
            <Menu>로그인</Menu>
          </Link>
          <Link to={`/signup`}>
            <Menu>회원가입</Menu>
          </Link>
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
  );
};

export default Header;

const Block = styled.header`
  display: flex; /* flexbox 사용 */
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
  height: 7vh;
  width: 100%;
`;
const Logo = styled.img`
  height: 50%;
  cursor: pointer;
`;
const RightDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  /* border: 1px solid black; */
  margin-left: auto;
`;
const Menu = styled.div`
  display: flex;
  gap: 6px;
  color: #333333;
  border-radius: 10px;
  font-size: 1rem;
  padding: 10px;
  /* border: 1px solid red; */
  cursor: pointer;
  &:hover {
    background-color: rgba(188, 239, 123, 0.5);
  }
`;
