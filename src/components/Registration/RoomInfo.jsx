// 숙소 이름과 숙소 설명 동시에 입력받기
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { registrationUserState } from "../../recoil/atoms/registrationUserState";
import { weight } from "../../styles/fonts";

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
        {/* <InputBox> */}
        <Input
          type="text"
          name="partyRoomName"
          value={partyRoomInfoState.partyRoomName}
          onChange={handlePartyRoomNameChange}
          required
        />
        {/* </InputBox> */}
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
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputTitle = styled.div`
  height: 5vh;
  line-height: 8vh;
  font-weight: ${weight.semibold};
`;

const Input = styled.input`
  margin-top: 15px;
  width: 100%;
  height: 5vh;
  padding: 0 0.5rem;
  font-size: 1rem;
  border: 1px solid #89d825;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 12rem;
  margin-top: 15px;
  padding: 0.5rem 0.5rem;
  border: 1px solid #89d825;
  border-radius: 10px;
  resize: none;
`;
