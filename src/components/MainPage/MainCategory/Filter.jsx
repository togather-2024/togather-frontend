import styled from "@emotion/styled";
import { BsFilterLeft } from "react-icons/bs";
import { colors } from "../../../styles/colors";

const FilterBox = styled.div`
  width: 6vw;
  background-color: ${colors.gray30};
  padding: 0.4rem 0;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  color: ${colors.white};

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
