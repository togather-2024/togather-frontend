import React, { useState } from "react";
import { size } from "../styles/fonts";
import { colors } from "../styles/colors";
import styled from "styled-components";
import axios from "axios";
import RoomInfo from "../components/Registration/RoomInfo";
import RoomAddress from "../components/Registration/RoomAddress";
import RoomPictures from "../components/Registration/RoomPictures";
import RoomHeadcount from "../components/Registration/RoomHeadcount";
import {
    registrationUserState,
    registrationImage,
} from "../recoil/atoms/registrationUserState";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import RoomKeywordPrice from "../components/Registration/RoomKeywordPrice";

const RoomRegistration = () => {
    const [compIdx, setCompIdx] = useState(0);
    const navigate = useNavigate();
    const registrationInput = useRecoilValue(registrationUserState);
    const registrationImageInput = useRecoilValue(registrationImage);
    const compObj = {
        0: { comp: <RoomInfo />, title: "숙소 정보" },
        1: { comp: <RoomAddress />, title: "숙소 주소" },
        2: { comp: <RoomPictures />, title: "숙소 사진" },
        3: { comp: <RoomHeadcount />, title: "숙소 이용" },
        4: { comp: <RoomKeywordPrice />, title: "숙소 상세" },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("refresh_token");
        const formData = new FormData();

        formData.append(
            "partyRoomRequestDto",
            JSON.stringify(registrationInput)
        );
        formData.append("mainImage", registrationImageInput.mainImage);
        if (
            Array.isArray(registrationImageInput.subImages) &&
            registrationImageInput.subImages.length > 0
        ) {
            for (let subImage of registrationImageInput.subImages) {
                formData.append("subImages", subImage);
            }
        }

        try {
            const res = await axios.post("/api/partyroom/register", formData, {
                headers: {
                    Authorization: token,
                    "Content-Type": "multipart/form-data",
                },
            });
            if (res.status === 200) {
                alert("숙소 등록이 완료되었습니다.");
                navigate("/");
            }
        } catch (e) {
            alert("호스트 권한이 없는 계정이거나 잘못된 정보 입력입니다.");
            console.log(e);
        }
    };

    const handleNextButton = (e) => {
        if (compIdx !== Object.entries(compObj).length - 1) {
            setCompIdx((prev) => prev + 1);
        } else {
            handleSubmit(e);
        }
    };

    return (
        <>
            {/* <Title>{compObj[compIdx].title}</Title> */}
            <Title>파티룸 등록하기</Title>
            <Container>
                {compObj[compIdx].comp}

                <Footer>
                    {/* button의 타입을 제대로 설정해주지 않으면 submit 효과가 발생할 수 있음. */}
                    {compIdx > 0 && (
                        <PrevButton
                            type="button"
                            onClick={() => setCompIdx((prev) => prev - 1)}
                        >
                            {"< 이전"}
                        </PrevButton>
                    )}
                    <NextButton
                        type="button"
                        /* 이 부분에서 유효성 검사 및 input 값 입력해야 함*/
                        onClick={handleNextButton}
                    >
                        {compIdx === Object.entries(compObj).length - 1
                            ? "등록하기"
                            : "다음 >"}
                    </NextButton>
                </Footer>
            </Container>
        </>
    );
};

export default RoomRegistration;

const Container = styled.form`
    width: 65vw;
    height: 65vh;
    border-radius: 20px;
    margin: 0 auto;
    padding: 20px 0;
    margin-top: 2vh;
    background-color: ${colors.hover01};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    margin-top: 10vh;
    justify-content: center;
    align-items: center;
    font-size: ${size.h1};
`;

const Footer = styled.footer`
    width: 70%;
    height: 8vh;
    position: relative;
    display: flex;
    align-items: center;
    padding: 1.5rem 0;
    margin-bottom: 1vh;
`;

const PrevButton = styled.button`
    font-size: 1rem;
    width: 6vw;
    height: 5vh;
    background-color: #a2de56;
    border: 1px solid #bcef7b;
    border-radius: 0.4rem;
    color: white;
    cursor: pointer;
    position: absolute;
    left: 10px;
    &:hover {
        background-color: white;
        color: black;
    }
`;

const NextButton = styled.button`
    font-size: 1rem;
    position: absolute;
    right: 10px;
    width: 6vw;
    height: 5vh;
    background-color: #a2de56;
    border: 1px solid #bcef7b;
    border-radius: 0.4rem;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
    }
`;
