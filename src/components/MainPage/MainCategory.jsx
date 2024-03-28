import styled from "@emotion/styled";
import Category from "./MainCategory/Category";
import Filter from "./MainCategory/Filter";

const Container = styled.div`
  margin: 30px 0px 20px 0px;
  width: 92vw;
  height: 7vh;
  display: flex;
  align-items: center;
`;

const MainCategory = ({ keywords }) => {
  return (
    <Container>
      <Category keywords={keywords}></Category>
      <Filter></Filter>
    </Container>
  );
};

export default MainCategory;
