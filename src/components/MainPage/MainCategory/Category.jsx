import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { useRecoilState } from "recoil";
import { searchValueState } from "../../../recoil/atoms/searchValueState";
import { useState } from "react";

const CategoryBar = styled.nav`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.white};
`;

const CategoryItem = styled.div`
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid ${colors.gray30};
    background-color: ${(props) => (props.clicked ? colors.hover01 : "white")};

    &:hover {
        background-color: ${colors.hover01};
        color: rgba(0, 0, 0, 0.8);
    }
`;

const Category = ({ keywords }) => {
    const [keywordsValue, setKeywordsValue] = useRecoilState(searchValueState);

    // 각 CategoryItem의 클릭 상태를 관리할 clicked 상태 배열
    const [clicked, setClicked] = useState(Array(keywords.length).fill(false));

    const handleKeywordsAPI = (index, keyword) => {
        // 이전의 clicked 상태 배열 복사 후 클릭된 항목만 수정
        const newClicked = [...clicked];
        newClicked[index] = !newClicked[index];

        setKeywordsValue((prev) => ({
            ...prev,
            keywords: newClicked[index]
                ? [...prev.keywords, keyword]
                : prev.keywords.filter((k) => k !== keyword),
        }));
        setClicked(newClicked);
    };

    return (
        <CategoryBar>
            {keywords.map((keyword, index) => {
                return (
                    <CategoryItem
                        key={index}
                        clicked={clicked[index]}
                        onClick={() => handleKeywordsAPI(index, keyword)}
                    >
                        {keyword}
                    </CategoryItem>
                );
            })}
        </CategoryBar>
    );
};

export default Category;
