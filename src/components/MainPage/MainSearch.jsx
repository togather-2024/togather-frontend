import styled from "@emotion/styled";
import { CiSearch } from "react-icons/ci";
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

const Region = styled.div`
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

    width: 40%;
    height: 100%;
    cursor: pointer;
    border-radius: 40px;
    border: none;
    font-size: 0.9rem;

    padding: 0.8rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Date = styled.div`
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

    width: 20%;
    height: 100%;
    cursor: pointer;
    border-radius: 40px;
    border: none;
    font-size: 0.9rem;

    padding: 0.8rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HeadCount = styled.div`
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

    width: 20%;
    height: 100%;
    cursor: pointer;
    border-radius: 40px;
    border: none;
    font-size: 0.9rem;

    padding: 0.8rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Keyword = styled.div`
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

    width: 34%;
    height: 100%;
    cursor: pointer;
    border-radius: 40px;
    border: none;
    font-size: 0.9rem;

    padding: 0.8rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const MainSearch = () => {
    return (
        <SearchSection>
            <SearchBar>
                <Region>
                    <span>지역</span>
                    <input placeholder="지역을 입력하세요" type="text"></input>
                </Region>
                <Date>
                    <span>날짜</span>
                    <input placeholder="날짜를 입력하세요" type="text"></input>
                </Date>
                <HeadCount>
                    <span>인원수</span>
                    <input
                        placeholder="인원수를 입력하세요"
                        type="text"
                    ></input>
                </HeadCount>
                <Keyword>
                    <span>키워드</span>
                    <input
                        placeholder="키워드를 입력하세요"
                        type="text"
                    ></input>
                </Keyword>
                <SearchButton type="submit">
                    <StyledCiSearch />
                </SearchButton>
            </SearchBar>
        </SearchSection>
    );
};

export default MainSearch;
