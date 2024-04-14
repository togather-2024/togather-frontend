import styled from "@emotion/styled";
import { CiSearch } from "react-icons/ci";
import { useState, useCallback } from "react";
import Region from "../../components/MainPage/MainSearch/Region";
import {
    regionInputState,
    dateInputState,
} from "../../recoil/atoms/searchState";
import { useRecoilState } from "recoil";
import CustomCalendar from "../Common/CustomCalendar";

const MainSearch = () => {
    /* 지역 , 날짜 클릭 여부 */
    const [regionClicked, setRegionClicked] = useState(false);
    const [dateClicked, setDateClicked] = useState(false);

    const [headCount, setHeadcount] = useState(2);
    const [keyword, setKeyword] = useState("");

    // Region component props
    const [province, setProvince] = useState(undefined);

    // 지역 , 날짜 변경
    const [regionState, setRegionState] = useRecoilState(regionInputState);
    const [dateState, setDateState] = useRecoilState(dateInputState);

    const handleDateChange = (newDate) => {
        const dateForm = `${newDate.getFullYear()}. ${newDate.getMonth() + 1}. ${newDate.getDate()}. `;
        setDateState(dateForm);
        setDateClicked(false);
    };
    const handleHeadcountChange = useCallback(
        (e) => {
            e.preventDefault();
            if (e.target.name === "-") {
                if (headCount > 0) setHeadcount(headCount - 1);
            } else if (e.target.value === "+") {
                if (headCount < 30) setHeadcount(headCount + 1);
            }
        },
        [headCount]
    );
    const handleKeywordChange = (e) => {
        const value = e.target.value;
        setKeyword(value);
    };

    const handleProvince = (e) => {
        const provinceInput = e.target.id;
        if (provinceInput !== regionState.province) {
            setProvince(provinceInput);
        }
    };

    const handleDistrict = (e) => {
        const district = e.target.id;
        if (district !== regionState.district) {
            setRegionState((prev) => ({
                region: {
                    province: province,
                    district: district,
                },
            }));
            setRegionClicked(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // regionState , dateState , headCount , keyword props로 묶어서 api요청하면 됨
        // 이후 메인 페이지 parameter넣어주면 됨
    };

    return (
        <SearchSection>
            <Region
                clicked={regionClicked}
                handleProvince={handleProvince}
                handleDistrict={handleDistrict}
                province={province}
            ></Region>
            <CustomCalendar
                handleDateChange={handleDateChange}
                selectedDate={dateState}
                style={{
                    position: "absolute",
                    width: "400px",
                    top: "150px",
                    zIndex: "3",
                    display: dateClicked ? "block" : "none",
                }}
            ></CustomCalendar>

            <SearchBar>
                <InputBox
                    style={{ width: "40%" }}
                    onClick={() => {
                        setRegionClicked((prev) => !prev);
                        dateClicked && setDateClicked(false);
                    }}
                >
                    <span>지역</span>
                    <input
                        placeholder="지역을 입력하세요"
                        value={
                            regionState.region.province &&
                            regionState.region.district &&
                            `${regionState.region.province} ${regionState.region.district}`
                        }
                        type="text"
                        readOnly
                    ></input>
                </InputBox>
                <InputBox
                    style={{ width: "20%" }}
                    onClick={() => {
                        setDateClicked((prev) => !prev);
                        regionClicked && setRegionClicked(false);
                    }}
                >
                    <span>날짜</span>
                    <input
                        placeholder="날짜를 입력하세요"
                        type="text"
                        value={dateState}
                        readOnly
                    />
                </InputBox>
                <InputBox id={headCount} style={{ width: "20%" }}>
                    <span>인원수</span>
                    <HeadCount>
                        <button
                            name="-"
                            type="button"
                            onClick={handleHeadcountChange}
                        >
                            -
                        </button>
                        <input type="text" value={headCount} />
                        <button
                            value="+"
                            name="button"
                            onClick={handleHeadcountChange}
                        >
                            +
                        </button>
                    </HeadCount>
                </InputBox>
                <InputBox style={{ width: "34%" }}>
                    <span>키워드</span>
                    <input
                        placeholder="키워드를 입력하세요"
                        type="text"
                        onChange={handleKeywordChange}
                    ></input>
                </InputBox>
                <SearchButton type="submit" onClick={handleSubmit}>
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
    margin-top: 24px;
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
