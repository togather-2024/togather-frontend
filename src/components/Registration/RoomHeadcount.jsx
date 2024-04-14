// 숙소 운영 시간 및 숙소 수용 가능 인원
import { size } from "../../styles/fonts";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { registrationUserState } from "../../recoil/atoms/registrationUserState";

const RoomInfo = () => {
    const [roomOperationState, setRoomOperationState] = useRecoilState(
        registrationUserState
    );
    console.log(roomOperationState);
    const [timeArr, setTimeArr] = useState(
        Array.from({ length: 24 }, (_, idx) => ({
            time: idx,
            clicked: false,
        }))
    );
    const [operationTime, setOperationTime] = useState({
        start: undefined,
        finish: undefined,
    });

    const handleOperationTime = (idx) => {
        setOperationTime((prev) => {
            const updated = { ...prev };

            if (updated.start === undefined) {
                updated.start = idx;
                updated.finish = idx;
            } else if (idx > updated.finish) {
                updated.finish = idx;
            } else if (idx === updated.start && idx === updated.finish) {
                updated.start = undefined;
                updated.finish = undefined;
            } else if (idx === updated.finish) {
                updated.finish = idx - 1;
            } else {
                updated.start = idx;
                updated.finish = idx;
            }
            return updated;
        });
    };
    const handleHeadcountChange = (e) => {
        setRoomOperationState((prev) => ({
            ...prev,
            guestCapacity: parseInt(e.target.value),
        }));
    };

    useEffect(() => {
        if (operationTime.start && operationTime.finish) {
            setTimeArr((prev) => {
                const updated = [...prev];
                updated.map((time, i) => {
                    if (i < operationTime?.start || i > operationTime?.finish) {
                        time.clicked = false;
                    } else {
                        time.clicked = true;
                    }
                });
                return updated;
            });

            setRoomOperationState((prev) => ({
                ...prev,
                openingHour: operationTime.start,
                closingHour: operationTime.finish,
            }));
        }
    }, [operationTime]);

    return (
        <ContentsBox>
            <Content>
                <InputTitle>숙소 운영 시간</InputTitle>
                <ButtonBox>
                    {timeArr.map((time, idx) => (
                        <Button
                            type="button"
                            key={idx}
                            clicked={time.clicked}
                            onClick={() => handleOperationTime(idx)}
                        >
                            {`${String(time.time).padStart(2, "0")}:00`}
                        </Button>
                    ))}
                </ButtonBox>
            </Content>
            <Content>
                <InputTitle>숙소 수용 가능 인원</InputTitle>
                <InputBox>
                    <Input
                        type="text"
                        name="min_head"
                        placeholder="최소 수용 인원"
                    />
                    <Input
                        type="text"
                        name="max_head"
                        placeholder="최대 수용 인원"
                        onChange={handleHeadcountChange}
                        required
                    ></Input>
                </InputBox>
            </Content>
        </ContentsBox>
    );
};

export default RoomInfo;
const ContentsBox = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
`;
const InputTitle = styled.div`
    height: 5vh;
    border-bottom: 1px solid black;
    line-height: 5vh;
    font-size: ${size.h3};
`;
const InputBox = styled.div`
    height: 8vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 45%;
    height: 5vh;
    padding: 0 0.5rem;
    font-size: 1rem;
`;
const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;
const Button = styled.button`
    width: 5vw;
    height: 4vh;
    font-size: 1rem;
    background-color: ${(props) => (props.clicked ? colors.point02 : "white")};
    border: 1px solid #bcef7b;
    border-radius: 0.4rem;
    color: rgba(0, 0, 0, 1);
    cursor: pointer;
    margin: 0.3rem;

    &:hover {
        background-color: ${colors.point02};
    }
`;
