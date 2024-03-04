import styled from "@emotion/styled";
import { BsFilterLeft } from "react-icons/bs";

const FilterBox = styled.div`
    width: 6vw;
    border: 1px solid black;
    padding: 0.4rem 0;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;

    & > span {
        font-size: 0.8rem;
    }

    & > svg {
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }
`;

const Filter = () => {
    return (
        <FilterBox>
            <BsFilterLeft></BsFilterLeft>
            <span>필터</span>
        </FilterBox>
    );
};

export default Filter;
