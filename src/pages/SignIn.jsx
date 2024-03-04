import styled from "@emotion/styled";

const Container = styled.div`
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

    & > button {
        width: 100%;
        height: 2.5rem;
        margin-bottom: 1rem;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
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
const SignIn = () => {
    return (
        <Container>
            <Title>로그인</Title>
            <BoxContainer>
                <Box>
                    <input type="text" placeholder="이메일" />
                </Box>

                <Box>
                    <input type="text" placeholder="비밀번호" />
                </Box>
            </BoxContainer>
            <BoxContainer style={{ marginTop: "1rem" }}>
                <button>로그인</button>
                <button>회원가입</button>
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
