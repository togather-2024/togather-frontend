// 숙소 키워드 입력
// 숙소 가격 입력
import { size, weight } from "../../styles/fonts";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  registrationUserState,
  registrationImage,
} from "../../recoil/atoms/registrationUserState";
import { IoClose } from "react-icons/io5";

const RoomInfo = () => {
  const [keyword, setKeyword] = useState("");
  const [roomCharState, setRoomCharState] = useRecoilState(
    registrationUserState
  );

  const [addPrice, setAddPrice] = useState(null);
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleAddKeyword = () => {
    setRoomCharState((prev) => ({
      ...prev,
      customTags: !prev.customTags ? [keyword] : [...prev.customTags, keyword],
    }));

    setKeyword("");
  };
  const handleKeywordDelete = (idx) => {
    setRoomCharState((prev) => ({
      ...prev,
      customTags: prev["customTags"].filter((_, i) => idx !== i),
    }));
  };

  // 이 부분
  const handlePrice = (e) => {
    setRoomCharState((prev) => ({
      ...prev,
      price: parseInt(e.target.value),
    }));
  };
  const handleAddPrice = () => {
    setAddPrice(
      roomCharState.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  };
  return (
    <ContentsBox>
      <Content>
        <InputTitle>숙소 키워드</InputTitle>
        <InputBox>
          <Input
            type="text"
            name="keyword"
            value={keyword}
            placeholder="키워드를 입력하세요."
            onChange={handleKeywordChange}
          />
          <Button type="button" onClick={handleAddKeyword}>
            등록
          </Button>
        </InputBox>
        <KeywordContainer>
          {roomCharState.customTags?.map((el, idx) => (
            <KeywordBox key={idx}>
              <Keyword>{el}</Keyword>
              <KeywordButton
                type="button"
                onClick={() => handleKeywordDelete(idx)}
              >
                <IoClose color="#FFFFFF" size={30} />
              </KeywordButton>
            </KeywordBox>
          ))}
        </KeywordContainer>
      </Content>
      <Content>
        <InputTitle>이용 가격</InputTitle>
        <InputBox>
          <Input
            type="text"
            placeholder="가격을 입력하세요."
            onChange={handlePrice}
          />
          <Button type="button" onClick={handleAddPrice}>
            등록
          </Button>
        </InputBox>
        <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "#8DB161" }}>
          시간 당 가격{addPrice} (원){" "}
        </p>
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
  gap: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InputTitle = styled.div`
  font-size: ${size.body01};
  font-weight: ${weight.semibold};
  margin-top: 4vh;
`;
const InputBox = styled.div`
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
  border: 1px solid #89d825;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 6vw;
  height: 5vh;
  font-size: 1rem;
  background-color: #a2de56;
  border: 1px solid #bcef7b;
  border-radius: 0.4rem;
  color: white;
  cursor: pointer;
  margin-left: 0.5rem;
`;

const KeywordContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const KeywordBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.6rem;
  background-color: ${colors.point02};
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
const Keyword = styled.span`
  font-size: 1rem;
  color: white;
  font-weight: ${weight.medium};
`;
const KeywordButton = styled.button`
  all: unset;
  margin-left: 5px;
  width: 13px;
  height: 13px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  color: white;
`;
