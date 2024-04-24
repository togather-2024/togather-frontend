import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loginState } from "../recoil/atoms/loginState";
import axios from "axios";
import { getUserInfo } from "../api/api";
import { profileInfoState } from "../recoil/atoms/profileState";

const initialState = {
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.id]: action.value,
      };
    default:
      return state;
  }
}

const SignIn = () => {
  const navigate = useNavigate();

  const setProfileInfo = useSetRecoilState(profileInfoState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [state, dispatch] = useReducer(reducer, initialState);

  // 아이디 , 패스워드 입력했을 때 , useReducer 내부에서 값 변화
  const handleChange = (e) => {
    dispatch({ type: "CHANGE", id: e.target.name, value: e.target.value });
  };

  // 로그인 버튼 클릭했을 때
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { email: state.email, password: state.password };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/member/login", body, config);
      if (res.status === 200) {
        alert("로그인 성공");
        localStorage.setItem("refresh_token", res.headers.authorization);
        setIsLoggedIn(true);

        //로그인과 동시에 사용자 정보 받아서 recoil에 저장
        const token = res.headers.authorization;
        const userInfo = await getUserInfo({ token });
        setProfileInfo(userInfo.data);

        navigate("/");
      }
    } catch (error) {
      alert("해당하는 계정이 없거나 잘못된 입력입니다.");
    }
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Title>로그인</Title>
      <BoxContainer>
        <Box>
          <input
            type="text"
            placeholder="이메일"
            name="email"
            onChange={handleChange}
          />
        </Box>

        <Box>
          <input
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={handleChange}
          />
        </Box>
      </BoxContainer>
      <BoxContainer style={{ marginTop: "1rem" }}>
        <Button type="submit">로그인</Button>
        <Link to={`/signup`} style={{ width: "100%" }}>
          <Button type="button">회원가입</Button>
        </Link>
      </BoxContainer>
      <span style={{ fontSize: "1rem" }}>또는</span>

      <ApiBox>
        <div>구글로 시작하기</div>
        <div>카카오로 시작하기</div>
      </ApiBox>
    </Container>
  );
};

export default SignIn;

const Container = styled.form`
  width: 50vw;
  height: 93vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  margin-top: -2vh;
  padding: 2rem 3rem;
`;

const BoxContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > button:first-child {
    background-color: #89d825;
    color: white;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #ddf7bd;

  color: black;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > input {
    width: 100%;
    height: 80%;
    margin: 1rem 0;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 0.4rem;
    padding-left: 1rem;
    font-size: 1rem;
  }

  & > button {
    margin-left: 1rem;
    width: 25%;
    height: 80%;
    font-size: 0.8rem;
    background-color: white;
    border: 1px solid #bcef7b;
    border-radius: 0.4rem;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
const ApiBox = styled.div`
  margin-top: 1.3rem;
  width: 70%;
  display: flex;
  justify-content: space-around;

  & > div {
    width: 40%;
    height: 4rem;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  & > div:last-child {
    background-color: #ffeb00;
    border: none;
  }
`;
