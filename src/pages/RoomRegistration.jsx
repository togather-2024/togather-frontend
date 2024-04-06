import React, { useState } from "react";
import { size } from "../styles/fonts";
import { colors } from "../styles/colors";
import styled from "styled-components";
import RoomInfo from "../components/Registration/RoomInfo";
import RoomAddress from "../components/Registration/RoomAddress";
import RoomPictures from "../components/Registration/RoomPictures";

const RoomRegistration = () => {
    const [compIdx, setCompIdx] = useState(0);
    const compArr = [<RoomInfo />, <RoomAddress />, <RoomPictures />];
    const compTitle = ["숙소 정보", "숙소 주소", "숙소 사진"];

    const handleNext = () => {
        setCompIdx(compIdx + 1);
    };
    return (
        <Container>
            <Title>{compTitle[compIdx]}</Title>
            {compArr[compIdx]}
            <Footer>
                {compIdx !== 0 && (
                    <PrevButton onClick={() => setCompIdx(compIdx - 1)}>
                        이전
                    </PrevButton>
                )}
                {compIdx !== compArr.length && (
                    <NextButton onClick={() => setCompIdx(compIdx + 1)}>
                        다음
                    </NextButton>
                )}
            </Footer>
        </Container>
    );
};

export default RoomRegistration;

const Container = styled.div`
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
