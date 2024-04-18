// 숙소 주소
import { colors } from "../../styles/colors";
import styled from "styled-components";
import React from "react";
import DaumPostCode from "react-daum-postcode";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { registrationUserState } from "../../recoil/atoms/registrationUserState";

const RoomAddress = () => {
    const [modalState, setModalState] = useState(false);
    const [roomAddressState, setRoomAddressState] = useRecoilState(
        registrationUserState
    );

    const [zipCode, setZipCode] = useState("");

    const postCodeStyle = {
        position: "absolute",
        width: "400px",
        height: "400px",
        display: modalState ? "block" : "none",
    };

    const onCompletePost = (data) => {
        const sido = data.sido;
        const sigungu = data.sigungu;
        const roadName = data.roadname;
        const roadAddress = data.roadAddress;
        const jibunAddress = data.jibunAddress;
        const zoneCode = data.zonecode;

        setRoomAddressState((prev) => {
            return {
                ...prev,
                sido: sido,
                sigungu: sigungu,
                roadName: roadName,
                roadAddress: roadAddress,
                jibunAddress: jibunAddress,
            };
        });
        setModalState(false);
        setZipCode(zoneCode);
    };

    const handleDetailAddress = (e) => {
        setRoomAddressState((prev) => ({
            ...prev,
            detailAddress: e.target.value,
        }));
    };
    return (
        <ContentsBox>
            <DaumPostCode
                style={postCodeStyle}
                onComplete={onCompletePost}
            ></DaumPostCode>

            <InputBox>
                <Input
                    placeholder={"우편 번호를 입력하세요"}
                    value={zipCode}
                    readOnly
                ></Input>
                <Button
                    type="button"
                    onClick={() => {
                        setModalState((prev) => !prev);
                    }}
                >
                    주소 검색
                </Button>
            </InputBox>
            <InputBox>
                <Input
                    placeholder={"도로명 주소를 입력하세요."}
                    value={roomAddressState.roadAddress}
                    readOnly
                ></Input>
            </InputBox>
            <InputBox>
                <Input
                    placeholder="상세 주소를 입력하세요."
                    onChange={handleDetailAddress}
                ></Input>
            </InputBox>
        </ContentsBox>
    );
};

export default RoomAddress;

const ContentsBox = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InputBox = styled.div`
    // padding: 0.5rem 0;
    height: 8vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 100%;
    height: 5vh;
    padding: 0 0.5rem;
    font-size: 1rem;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
    width: 6vw;
    height: 5vh;
    font-size: 1rem;
    background-color: ${colors.hover01};
    border: 1px solid #bcef7b;
    border-radius: 0.4rem;
    color: rgba(0, 0, 0, 1);
    cursor: pointer;
    margin-left: 1rem;
`;
