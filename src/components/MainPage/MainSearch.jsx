import styled from "@emotion/styled";
import { CiSearch } from "react-icons/ci";
import { useState, useCallback } from "react";

const MainSearch = () => {
    const [headCount, setHeadcount] = useState(2);

    const changeCount = useCallback(
        (e) => {
            e.preventDefault();
            if (e.target.value === "-") {
                if (headCount > 0) setHeadcount(headCount - 1);
            } else if (e.target.value === "+") {
                if (headCount < 30) setHeadcount(headCount + 1);
            }
        },
        [headCount]
    );

    return (
        <SearchSection>
            <SearchBar>
                <InputBox style={{ width: "40%" }}>
                    <span>지역</span>
                    <input placeholder="지역을 입력하세요" type="text"></input>
                </InputBox>
                <InputBox style={{ width: "20%" }}>
                    <span>날짜</span>
                    <input placeholder="날짜를 입력하세요" type="text" />
                </InputBox>
                <InputBox id={headCount} style={{ width: "20%" }}>
                    <span>인원수</span>
                    <HeadCount>
                        <button value="-" onClick={changeCount}>
                            -
                        </button>
                        <input type="text" placeholder={headCount} />
                        <button value="+" onClick={changeCount}>
                            +
                        </button>
                    </HeadCount>
                </InputBox>
                <InputBox style={{ width: "34%" }}>
                    <span>키워드</span>
                    <input
                        placeholder="키워드를 입력하세요"
                        type="text"
                    ></input>
                </InputBox>
                <SearchButton type="submit">
                    <StyledCiSearch />
                </SearchButton>
            </SearchBar>
        </SearchSection>
    );
};

export default MainSearch;

const SearchSection = styled.div`
    width: 92vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
`;

// e.preventDefault 해줘야함
const SearchBar = styled.form`
    width: 60vw;
    height: 10vh;
    display: flex;
    align-items: center;
    border: 2px solid rgba(0, 0, 0, 0.2);
    position: relative;

    border-radius: 50px;
    box-shadow: 0 0 10px 1px #2f9d27;
    overflow: hidden;
`;

const InputBox = styled.div`
    & > input {
        border: none;
        background-color: transparent;
    }
    & > input::placeholder {
        font-color: rgba(0, 0, 0, 0.4);
        font-size: 0.8rem;
        white-space: pre-wrap;
    }
    &:hover {
        background-color: #ebebeb;
    }

    & > input:focus {
        outline: none;
    }

    height: 100%;
    cursor: pointer;
    border-radius: 40px;
    border: none;
    font-size: 0.9rem;

    padding: 0.8rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`;

const SearchButton = styled.button`
    position: absolute;
    background-color: #bcef7b;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    border: none;
    right: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.2s background ease-in;
    &:hover {
        background-color: #2f9d27;
    }
`;

const StyledCiSearch = styled(CiSearch)`
    width: 2rem;
    height: 2rem;
    color: white;
`;

const HeadCount = styled.div`
    width: 5rem;
    height: 2rem;
    position: absolute;
    border-radius: 1rem;
    top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > input {
        width: 25%;
        border: none;
        background-color: transparent;
    }
    & > input::placeholder {
        text-align: center;
    }

    & > button {
        border-radius: 100%;
        color: #2f9d27;
        border: 1px solid #2f9d27;
        background-color: transparent;
        cursor: pointer;
    }
`;
