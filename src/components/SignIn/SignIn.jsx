import styled from "@emotion/styled";
import Header from "../Header";

const Container = styled.div`
    width: 50%;
    height: 93vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.div`
    font-size: 4rem;
    padding: 3rem 5rem;
`;
const BoxContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    & > button {
        width: 100%;
        height: 4rem;
        margin-bottom: 1.5rem;
        border: none;
        border-radius: 15px;
        font-size: 1.3rem;
    }

    & > button:first-child {
        background-color: #89d825;
        color: white;
    }
    & > button:last-child {
        background-color: #ddf7bd;
        color: black;
    }
`;

const Box = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    & > input {
        width: 100%;
        height: 3rem;
        margin: 1rem 0;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 0.4rem;
        padding-left: 1rem;
        font-size: 1.3rem;
    }

    & > button {
        margin-left: 2rem;
        width: 25%;
        height: 3.5rem;
        font-size: 1.3rem;
        background-color: white;
        border: 1px solid #bcef7b;
        border-radius: 0.4rem;
        color: rgba(0, 0, 0, 0.5);
    }
`;
const ApiBox = styled.div`
    margin-top: 2rem;
    width: 70%;
    display: flex;
    justify-content: space-between;

    & > div {
        width: 48%;
        height: 8rem;
        border: 1px solid black;
        border-radius: 10px;
        font-size: 1.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > div:last-child {
        background-color: #ffeb00;
        border: none;
    }
`;

const SignIn = () => {
    return (
        <>
            <Header></Header>
            <Container>
                <Title>회원 가입</Title>
                <BoxContainer>
                    <Box>
                        <input type="text" placeholder="이름" />
                    </Box>
                    <Box>
                        <input type="text" placeholder="이메일" />
                        <button>인증번호 받기</button>
                    </Box>
                    <Box>
                        <input type="text" placeholder="인증번호" />
                        <button>확인</button>
                    </Box>
                    <Box>
                        <input type="text" placeholder="비밀번호" />
                    </Box>
                    <Box>
                        <input type="text" placeholder="비밀번호 확인" />
                    </Box>
                </BoxContainer>
                <BoxContainer>
                    <button>가입하기</button>
                    <button>회원이라면 ? 로그인</button>
                </BoxContainer>
                <span style={{ fontSize: 20 }}>또는</span>

                <ApiBox>
                    <div>구글로 시작하기</div>
                    <div>카카오로 시작하기</div>
                </ApiBox>
            </Container>
        </>
    );
};
export default SignIn;
