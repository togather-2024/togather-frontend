import styled from "@emotion/styled";
import { CiSearch } from "react-icons/ci";
const SearchSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
`;

// e.preventDefault 해줘야함
const SearchBar = styled.form`
    width: 60%;
    height: 10vh;
    display: flex;
    border: 2px solid rgba(0, 0, 0, 0.2);
    position: relative;

    justify-content: center;
    align-items: center;
    border-radius: 50px;
    box-shadow: 0 0 10px 1px #2f9d27;
    overflow: hidden;
`;

const Region = styled.input`
    &::placeholder {
        font-size: 1.2rem;
        color: black;
        font-weight: 700;
        white-space: pre-wrap;
        padding-left: 3rem;
    }
    &:hover {
        background-color: #ebebeb;
    }

    &:focus {
        outline: none;
    }

    &:after {
        content: "";
        border-right: 1px solid black;
        height: 30%;
    }

    width: 40%;
    height: 100%;
    cursor: pointer;
    border-radius: 40px;
    border: none;
`;
const Date = styled.input`
    width: 20%;
    height: 100%;
    cursor: pointer;
    border-radius: 40px;
    border: none;

    &::placeholder {
        font-size: 1.2rem;
        color: black;
        font-weight: 700;
        white-space: pre-wrap;
        padding-left: 3rem;
    }

    &:hover {
        background-color: #ebebeb;
    }
    &:focus {
        outline: none;
    }
`;

const HeadCount = styled.input`
    width: 20%;
    height: 100%;
    cursor: pointer;
    border-radius: 40px;
    border: none;
    &::placeholder {
        font-size: 1.2rem;
        color: black;
        font-weight: 700;
        white-space: pre-wrap;
        padding-left: 3rem;
    }
    &:hover {
        background-color: #ebebeb;
    }
    &:focus {
        outline: none;
    }
`;
const Keyword = styled.input`
    width: 34%;
    height: 100%;
    cursor: pointer;
    border-radius: 40px;
    border: none;
    &::placeholder {
        font-size: 1.2rem;
        color: black;
        font-weight: 700;
        white-space: pre-wrap;
        padding-left: 3rem;
    }
    &:hover {
        background-color: #ebebeb;
    }
    &:focus {
        outline: none;
    }
`;

const SearchButton = styled.button`
    position: absolute;
    background-color: #bcef7b;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    border: none;
    right: 1rem;
    cursor: pointer;
    transition: 0.2s background ease-in;
    &:hover {
        background-color: #2f9d27;
    }
`;

const StyledCiSearch = styled(CiSearch)`
    width: 2.5rem;
    height: 2.5rem;
    color: white;
`;

const MainSearch = () => {
    return (
        <SearchSection>
            <SearchBar>
                <Region name="region" type="text" placeholder="지역"></Region>
                <Date name="date" type="text" placeholder="체크인"></Date>
                <HeadCount name="headcount" placeholder="인원"></HeadCount>
                <Keyword name="keyword" placeholder="키워드"></Keyword>
                <SearchButton type="submit">
                    <StyledCiSearch />
                </SearchButton>
            </SearchBar>
        </SearchSection>
    );
};

export default MainSearch;
