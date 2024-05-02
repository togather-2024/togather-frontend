import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";
import { dropDownState, loginState } from "../../recoil/atoms/loginState";
import { useRecoilState } from "recoil";

const ProfileDropdown = () => {
    // const arr = ["찜한 목록", "메시지", "예약 관리", "내 정보", "로그아웃"];
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
    const [isDropped, setIsDropped] = useRecoilState(dropDownState);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsDropped(false);
        localStorage.clear();
        window.location.replace("/");
    };

    const links = {
        찜한목록: "/my/bookmark",
        메시지: "/my/messages",
        예약관리: "/my/reservations",
        리뷰관리: "/my/review",
        내정보: "my/profile",
    };
    return (
        <Container>
            {Object.entries(links).map(([label, path], index) => (
                <Link to={path} key={index} onClick={() => setIsDropped(false)}>
                    <Box>{label}</Box>
                </Link>
            ))}
            <LogoutButton type="button" onClick={handleLogout}>
                로그아웃
            </LogoutButton>
        </Container>
    );
};

export default ProfileDropdown;

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

const LogoutButton = styled.button`
    color: ${colors.dark};
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    cursor: pointer;
    border: none;
    background-color: white;
    border-radius: 10px;
    &:hover {
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;
