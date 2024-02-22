import styled from "@emotion/styled";

const SearchSection = styled.div`
    margin-top: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3vh;
`;

// e.preventDefault 해줘야함
const SearchBar = styled.form``;

const Region = styled.input`
    width: 177px;
    height: 80px;
    border-radius: 30px 0px 0px 30px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &:hover {
        background-color: #ebebeb;
    }

    &::placeholder {
        content: "지역\n지역을 선택하세요.";
    }
`;
const Date = styled.input`
    width: 177px;
    height: 80px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    cursor: pointer;
    &:hover {
        background-color: #ebebeb;
    }
`;

const HeadCount = styled.input`
    width: 177px;
    height: 80px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &:hover {
        background-color: #ebebeb;
    }
`;

const Keyword = styled.input`
    width: 230px;
    height: 80px;
    border-radius: 0px 30px 30px 0px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &:hover {
        background-color: #ebebeb;
    }
`;

const MainSearch = () => {
    return (
        <SearchSection>
            <SearchBar>
                <Region
                    name="region"
                    placeholder="지역 지역을 입력하세요."
                ></Region>
                <Date name="date" placeholder="날짜"></Date>
                <HeadCount name="headcount" placeholder="인원"></HeadCount>
                <Keyword name="keyword" placeholder="키워드"></Keyword>
            </SearchBar>
        </SearchSection>
    );
};

export default MainSearch;
