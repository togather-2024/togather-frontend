import styled from "@emotion/styled";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: {
            value: "",
            isValid: "",
        },
        verificationCode: true,
        password: {
            value: "",
            isValid: "",
        },
        passwordCheck: {
            value: "",
            isValid: "",
        },
        submitValid: false,
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        verifyCode: "",
        password: "",
        passwordCheck: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: {
                    ...prevData[name],
                    value,
                    isValid:
                        name === "passwordCheck"
                            ? validateField(
                                  name,
                                  value,
                                  formData.password.value
                              )
                            : validateField(name, value),
                },
                submitValid: isFormValid(),
            }));
        }
    };
    const validateField = (name, value, password = null) => {
        let errorMessage = "";
        let isValid = false;
        switch (name) {
            case "email":
                if (value.includes("@") && value.includes(".com")) {
                    const front = value.split("@")[0];
                    const regex = /\d/g;
                    const matches = front.match(regex);

                    if (front.length >= 6 && matches.length >= 3) {
                        isValid = true;
                    } else {
                        errorMessage = "유효하지 않은 길이의 이메일입니다.";
                    }
                } else {
                    errorMessage = "형식에 맞지 않는 이메일입니다.";
                }
                break;
            case "password":
                const regex = /\d/g;
                const matches = value.match(regex);

                if (value.length >= 6 && matches.length >= 3) {
                    isValid = true;
                } else {
                    errorMessage = "올바르지 않은 비밀번호 형식입니다.";
                }
                break;
            case "passwordCheck":
                isValid = value === password;
                isValid
                    ? (errorMessage = "")
                    : (errorMessage = "비밀번호가 일치하지 않습니다.");
                break;
            default:
                break;
        }
        setFormErrors((prevError) => ({
            ...prevError,
            [name]: errorMessage,
        }));
        return isValid;
    };

    const isFormValid = useCallback(() => {
        for (const key in formData) {
            if (formData[key].hasOwnProperty("isValid")) {
                console.log(formData[key], formData[key].isValid);
                if (!formData[key].isValid) {
                    return false;
                }
            }
        }
        return true;
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
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
                            handleChange(e);
                        }}
                    />
                </Box>
                <Box>
                    <input
                        type="text"
                        name="email"
                        placeholder="이메일"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    <button>인증번호 받기</button>
                </Box>
                {formErrors.email && (
                    <p style={{ color: "red" }}>{formErrors.email}</p>
                )}
                <Box>
                    <input
                        type="text"
                        name="verificationCode"
                        placeholder="인증번호"
                        onChange={(e) => {
                            handleChange(e);
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
                            handleChange(e);
                        }}
                    />
                </Box>
                {formErrors.password && (
                    <p style={{ color: "red" }}>{formErrors.password}</p>
                )}
                <Box>
                    <input
                        type="password"
                        name="passwordCheck"
                        placeholder="비밀번호 확인"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </Box>
                {formErrors.passwordCheck && (
                    <p style={{ color: "red" }}>{formErrors.passwordCheck}</p>
                )}
            </BoxContainer>
            <BoxContainer style={{ marginTop: "1rem" }}>
                <Button type="submit" disabled={!formData.submitValid}>
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
