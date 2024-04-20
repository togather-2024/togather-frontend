// 숙소 이름과 숙소 설명 동시에 입력받기
import { size } from "../../styles/fonts";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { registrationUserState } from "../../recoil/atoms/registrationUserState";

const RoomInfo = () => {
    const [partyRoomInfoState, setPartyRoomInfoState] = useRecoilState(
        registrationUserState
    );
    const handlePartyRoomNameChange = (e) => {
        setPartyRoomInfoState((prev) => ({
            ...prev,
            partyRoomName: e.target.value,
        }));
    };

    const handlePartyRoomDescChange = (e) => {
        setPartyRoomInfoState((prev) => ({
            ...prev,
            partyRoomDesc: e.target.value,
        }));
    };

    return (
        <ContentsBox>
            <Content>
                <InputTitle>숙소 이름</InputTitle>
                <InputBox>
                    <Input
                        type="text"
                        name="partyRoomName"
                        value={partyRoomInfoState.partyRoomName}
                        onChange={handlePartyRoomNameChange}
                        required
                    />
                    <Button>중복 확인</Button>
                </InputBox>
            </Content>
            <Content>
                <InputTitle>숙소 설명</InputTitle>
                <TextArea
                    name="partyRoomDesc"
                    value={partyRoomInfoState.partyRoomDesc}
                    onChange={handlePartyRoomDescChange}
                    required
                ></TextArea>
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
    // padding: 0.5rem 0;
    height: 8vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 80%;
    height: 5vh;
    padding: 0 0.5rem;
    font-size: 1rem;
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
`;
const TextArea = styled.textarea`
    width: 100%;
    height: 12rem;
    margin-top: 1rem;
    padding: 0.5rem 0.5rem;
`;
