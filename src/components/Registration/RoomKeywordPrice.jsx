// 숙소 키워드 입력
// 숙소 가격 입력
import { size } from "../../styles/fonts";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
    registrationUserState,
    registrationImage,
} from "../../recoil/atoms/registrationUserState";

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
            customTags: !prev.customTags
                ? [keyword]
                : [...prev.customTags, keyword],
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
                                X
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
                <p style={{ fontSize: "1.2rem" }}>시간 당 가격{addPrice} 원</p>
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
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin: 2vh;
`;
const InputTitle = styled.div`
    height: 5vh;
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
    margin-top:1rem;
    width: 100%;
    display:flex;
    flex-wrap wrap;
    height:8vh;
`;
const KeywordBox = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.1rem 0.3rem;
    background-color: #6c6c6c;
    height: 5vh;
    border-radius: 0.8rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
`;
const Keyword = styled.span`
    font-size: 1.2rem;
    color: white;
`;
const KeywordButton = styled.button`
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
    border: 1px solid white;
    &:hover {
        background-color: white;
        color: black;
    }
`;
