import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

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

  &:hover {
    background-color: ${colors.hover01};
    color: rgba(0, 0, 0, 0.8);
  }
`;

const Category = ({ keywords }) => {
  return (
    <CategoryBar>
      {keywords.map((keyword) => {
        return (
          <CategoryItem
            key={keyword.username}
          >{`# ${keyword.username}`}</CategoryItem>
        );
      })}
    </CategoryBar>
  );
};

export default Category;
