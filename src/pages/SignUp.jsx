import styled from "@emotion/styled";
import { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";

const initialState = {
    name: "",
    email: {
        value: "",
        isValid: false,
    },
    verificationCode: {
        value: "",
        isValid: false,
    },
    password: {
        value: "",
        isValid: false,
    },
    confirmPassword: {
        value: "",
        isValid: false,
    },
    formValid: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE":
            if (action.id === "name")
                return {
                    ...state,
                    [action.id]: action.value,
                };
            return {
                ...state,
                [action.id]: { ...state[action.id], value: action.value },
            };

        case "EMAIL_FORM":
            let isEmail = false;
            if (action.value.includes("@") && action.value.includes(".com")) {
                const front = action.value.split("@")[0];
                const regex = /\d/g;
                const matches = front.match(regex);
                if (front.length >= 6 && matches.length >= 3) {
                    isEmail = true;
                } else {
                    isEmail = false;
                }
            } else {
                isEmail = false;
            }
            return {
                ...state,
                email: {
                    value: action.value,
                    isValid: isEmail,
                },
            };
        case "PASSWORD_FORM":
            let isValidPassword = false;
            const regex = /\d/g;
            const matches = action.value.match(regex);

            if (action.value.length >= 6 && matches.length >= 3) {
                isValidPassword = true;
            }
            return {
                ...state,
                password: { value: action.value, isValid: isValidPassword },
            };

        case "PASSWORD_EQUAL":
            let passwordEqual = false;
            if (action.password === action.confirmPassword) {
                passwordEqual = true;
            }

            return {
                ...state,
                confirmPassword: {
                    ...state.confirmPassword,
                    isValid: passwordEqual,
                },
            };

        case "FORM_VALIDATE":
            let formIsValid =
                state.name &&
                state.email.isValid &&
                state.password.isValid &&
                state.confirmPassword.isValid;

            return {
                ...state,
                formValid: formIsValid,
            };

        default:
            return state;
    }
}

const SignIn = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // 해당 input 값 변화에 따른 객체 변화
    const handleChange = (e, id) => {
        dispatch({ type: "CHANGE", id: e.target.name, value: e.target.value });
    };

    // 제출시 모든 입력 값 조건 충족했는지 판단 여부
    const handleSubmit = (e) => {
        e.preventDefault();

        // if(state.formValid)
    };
    useEffect(() => {
        dispatch({ type: "FORM_VALIDATE" });
        console.log(state.email.isValid);
        console.log(state.name.isValid);
        console.log(state.password.isValid);
        console.log(state.confirmPassword.isValid);
    }, [
        state.email.value,
        state.name.value,
        state.password.value,
        state.confirmPassword.value,
    ]);

    // 이메일 형식 판단
    useEffect(() => {
        dispatch({ type: "EMAIL_FORM", value: state.email.value });
    }, [state.email.value]);

    // 비밀번호 형식 판단
    useEffect(() => {
        dispatch({ type: "PASSWORD_FORM", value: state.password.value });
    }, [state.password.value]);

    // 비밀번호와 비밀번호 확인 일치 여부 판단
    useEffect(() => {
        dispatch({
            type: "PASSWORD_EQUAL",
            password: state.password.value,
            confirmPassword: state.confirmPassword.value,
        });
    }, [state.password.value, state.confirmPassword.value]);

    // 제출 형식이 true이면 api 호출

    return (
        <Container onSubmit={handleSubmit}>
            <Title>회원 가입</Title>
            <BoxContainer>
                <Box>
                    <input
                        type="text"
                        name="name"
                        placeholder="이름"
                        onChange={(e) => {
                            handleChange(e, e.target.name);
                        }}
                    />
                </Box>
                <Box>
                    <input
                        type="text"
                        name="email"
                        placeholder="이메일"
                        onChange={(e) => {
                            handleChange(e, e.target.name);
                        }}
                    />
                    <button>인증번호 받기</button>
                </Box>
                {state.email.isValid || (
                    <p style={{ color: "red" }}>
                        올바른 형식의 이메일이 아닙니다.
                    </p>
                )}
                <Box>
                    <input
                        type="text"
                        name="verificationCode"
                        placeholder="인증번호"
                        onChange={(e) => {
                            handleChange(e, e.target.name);
                        }}
                    />
                    <button>확인</button>
                </Box>
                <Box>
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        onChange={(e) => {
                            handleChange(e, e.target.name);
                        }}
                    />
                </Box>
                {state.password.isValid || (
                    <p style={{ color: "red" }}>
                        비밀번호 형식이 올바르지 않습니다.
                    </p>
                )}
                <Box>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="비밀번호 확인"
                        onChange={(e) => {
                            handleChange(e, e.target.name);
                        }}
                    />
                </Box>
                {state.confirmPassword.isValid || (
                    <p style={{ color: "red" }}>
                        비밀번호가 일치하지 않습니다.
                    </p>
                )}
            </BoxContainer>
            <BoxContainer style={{ marginTop: "1rem" }}>
                <Button type="submit" disabled={!state.formValid}>
                    가입하기
                </Button>
                <Link to={`/signin`}>
                    <Button>회원이라면 ? 로그인</Button>
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
    align-items: center;
`;
const Title = styled.div`
    margin-top: 2rem;
    font-size: 2rem;
    padding: 2rem 3rem;
`;
const BoxContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > button:first-child {
        &:disabled {
            cursor: not-allowed;
            background-color: #ddd;
        }
        background-color: #89d825;
        color: white;
    }
`;
const Button = styled.button`
    width: 31.5rem;
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
        height: 70%;
        margin: 1rem 0;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 0.4rem;
        padding-left: 1rem;
        font-size: 1rem;
    }

    & > button {
        margin-left: 1rem;
        width: 25%;
        height: 70%;
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
