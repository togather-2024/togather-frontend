import styled from "@emotion/styled";
import { BsFilterLeft } from "react-icons/bs";

const FilterBox = styled.div`
    width: 6%;
    height: 80%;
    border: 1px solid black;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;

    & > span {
        font-size: 1.5rem;
    }

    & > svg {
        font-size: 2.2rem;
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
