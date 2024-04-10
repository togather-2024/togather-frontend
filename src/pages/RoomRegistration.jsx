import React, { useState } from "react";
import { size } from "../styles/fonts";
import { colors } from "../styles/colors";
import styled from "styled-components";
import RoomInfo from "../components/Registration/RoomInfo";
import RoomAddress from "../components/Registration/RoomAddress";
import RoomPictures from "../components/Registration/RoomPictures";
import RoomHeadcount from "../components/Registration/RoomHeadcount";
import RoomKeywordPrice from "../components/Registration/RoomKeywordPrice";

const RoomRegistration = () => {
    const [compIdx, setCompIdx] = useState(0);

    const compObj = {
        0: { comp: <RoomInfo />, title: "숙소 정보" },
        1: { comp: <RoomAddress />, title: "숙소 주소" },
        2: { comp: <RoomPictures />, title: "숙소 사진" },
        3: { comp: <RoomHeadcount />, title: "숙소 이용" },
        4: { comp: <RoomKeywordPrice />, title: "숙소 상세" },
    };
    console.log(compIdx);
    return (
        <Container>
            <Title>{compObj[compIdx].title}</Title>

            {compObj[compIdx].comp}

            <Footer>
                {/* button의 타입을 제대로 설정해주지 않으면 submit 효과가 발생할 수 있음. */}
                {compIdx > 0 && (
                    <PrevButton
                        type="button"
                        onClick={() => setCompIdx((prev) => prev - 1)}
                    >
                        이전
                    </PrevButton>
                )}
                <NextButton
                    type={
                        compIdx === Object.entries(compObj).length - 1
                            ? "submit"
                            : "button"
                    }
                    onClick={() => {
                        if (compIdx < Object.entries(compObj).length - 1) {
                            setCompIdx((prev) => prev + 1);
                        }
                    }}
                >
                    {compIdx === Object.entries(compObj).length - 1
                        ? "등록하기"
                        : "다음"}
                </NextButton>
            </Footer>
        </Container>
    );
};

export default React.memo(RoomRegistration);

const Container = styled.form`
    width: 65vw;
    height: 60vh;
    border: 1px solid black;
    margin: 0 auto;
    margin-top: 15vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    width: 100%;
    height: 20%;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${size.h1};
`;

const Footer = styled.footer`
    width: 100%;
    height: 10vh;
    position: relative;
    display: flex;
    align-items: center;
    padding: 1.5rem 0;
`;

const PrevButton = styled.button`
    position: absolute;
    font-size: 1rem;

    left: 10px;
    width: 6vw;
    height: 7vh;
    background-color: ${colors.hover01};
    border: 1px solid #bcef7b;
    border-radius: 0.4rem;
    color: rgba(0, 0, 0, 1);
    cursor: pointer;
`;

const NextButton = styled.button`
    position: absolute;
    font-size: 1rem;

    right: 10px;
    width: 6vw;
    height: 7vh;
    background-color: ${colors.hover01};
    border: 1px solid #bcef7b;
    border-radius: 0.4rem;
    color: rgba(0, 0, 0, 1);
    cursor: pointer;
`;
