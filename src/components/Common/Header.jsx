import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { colors } from "../../styles/colors";
import { loginState, dropDownState } from "../../recoil/atoms/loginState";
import { useRecoilState, useRecoilValue } from "recoil";
import ProfileDropdown from "../Profile/ProfileDropdown";
import profile from "../../assets/profile.png";

const Header = () => {
  const loginValue = useRecoilValue(loginState);
  const [isDropped, setIsDropped] = useRecoilState(dropDownState);
  const dataString = localStorage.getItem("profileInfo");
  const data = JSON.parse(dataString);
  const name = data?.profileInfoState?.memberName;
  const handleDropDown = () => {
    setIsDropped(!isDropped);
  };

  return (
    <>
      {isDropped ? <ProfileDropdown /> : ""}
      <Block>
        <Link to={`/`}>
          <Logo src={logo} alt="logo" />
        </Link>
        {!loginValue ? (
          <MenuContainer>
            <Link to={`/signin`}>
              <Menu>숙소 등록</Menu>
            </Link>
            <Link to={`/signin`}>
              <Menu>로그인</Menu>
            </Link>
            <Link to={`/signup`}>
              <Menu>회원가입</Menu>
            </Link>
          </MenuContainer>
        ) : (
          <MenuContainer>
            <Link to={`/registration`}>
              <Menu>숙소 등록</Menu>
            </Link>
            <Menu onClick={handleDropDown}>
              <ProfileImg src={profile} alt="프로필" /> {name} 님
            </Menu>
            <Menu>
              <FaBell />
            </Menu>
          </MenuContainer>
        )}
      </Block>
    </>
  );
};

export default Header;

const Block = styled.header`
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  height: 7vh;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
`;
const Logo = styled.img`
  height: 30px;
  cursor: pointer;
`;
const MenuContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  margin-left: auto;
`;
const Menu = styled.div`
  display: flex;
  gap: 6px;
  color: #333333;
  border-radius: 10px;
  font-size: 1rem;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(188, 239, 123, 0.5);
  }
`;

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
`;
