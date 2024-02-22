import styled from "@emotion/styled";

const Container = styled.div`
    margin-top: 4rem;
    width: 100%;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Category = styled.div`
    width: 70%;
    height: 5vh;
    background-color: #abcc80;
    border-radius: 15px;
`;

const Filter = styled.div`
    width: 7%;
    height: 5vh;
    border: 1px solid black;
    border-radius: 10px;
    margin-left: 1.5rem;
`;

const MainCategory = () => {
    return (
        <Container>
            <Category></Category>
            <Filter></Filter>
        </Container>
    );
};

export default MainCategory;
