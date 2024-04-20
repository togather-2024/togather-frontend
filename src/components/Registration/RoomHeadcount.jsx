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

    const days = [
        ["월요일", "MONDAY"],
        ["화요일", "TUESDAY"],
        ["수요일", "WEDNESDAY"],
        ["목요일", "THURSDAY"],
        ["금요일", "FRIDAY"],
        ["토요일", "SATURDAY"],
        ["일요일", "SUNDAY"],
    ];
    const [weekend, setWeekend] = useState(
        Array.from({ length: 7 }, (_, idx) => ({
            id: days[idx][1],
            idx: idx,
            day: days[idx][0],
            clicked: false,
        }))
    );

    const [timeArr, setTimeArr] = useState(
        Array.from({ length: 24 }, (_, idx) => idx)
    );

    const handleWeekend = (idx) => {
        setWeekend((prev) => {
            return prev.map((day, index) => {
                if (index === idx) {
                    return { ...day, clicked: !day.clicked };
                } else {
                    return day;
                }
            });
        });
    };

    useEffect(() => {
        setRoomOperationState((prev) => ({
            ...prev,
            operationDays: weekend
                .filter((day) => day.clicked)
                .map((day) => day.id),
        }));
    }, [weekend]);

    const handleHeadcountChange = (e) => {
        setRoomOperationState((prev) => ({
            ...prev,
            guestCapacity: parseInt(e.target.value),
        }));
    };

    const handleTime = (e) => {
        const name = e.target.name;
        setRoomOperationState((prev) => ({
            ...prev,
            [name]: e.target.value,
        }));

        const idx = e.target.value;
        const times = Array(24)
            .fill(0)
            .map((_, idx) => idx);

        setTimeArr(() => {
            const updated = times.slice(idx);
            return updated;
        });
    };

    return (
        <ContentsBox>
            <Content>
                <InputTitle>숙소 운영 시간 및 날짜</InputTitle>
                <SelectContainer>
                    <SelectBox>
                        <span>시작</span>
                        <Select name="openingHour" onChange={handleTime}>
                            {Array(24)
                                .fill(0)
                                .map((_, idx) => (
                                    <option
                                        value={idx}
                                    >{`${String(idx).padStart(2, 0)}:00`}</option>
                                ))}
                        </Select>
                    </SelectBox>
                    <span>~</span>
                    <SelectBox>
                        <span>끝</span>
                        <Select name="closingHour" onChange={handleTime}>
                            {timeArr.map((time) => (
                                <option
                                    value={time}
                                >{`${String(time).padStart(2, 0)}:00`}</option>
                            ))}
                        </Select>
                    </SelectBox>
                </SelectContainer>
                <ButtonBox>
                    {weekend.map((day) => (
                        <Button
                            type="button"
                            id={day.id}
                            idx={day.idx}
                            clicked={day.clicked}
                            onClick={() => handleWeekend(day.idx)}
                        >
                            {day.day}
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

const SelectContainer = styled.div`
    display: flex;
    width: 100%;
    height: 8vh;
    align-items: center;
`;

const SelectBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    margin-right: 10px;
`;

const Select = styled.select`
    margin-left: 10px;
    width: 7rem;
    height: 2rem;
    font-size: 1.2rem;
    padding-left: 25px;
`;
