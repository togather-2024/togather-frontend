import styled from "@emotion/styled";

const CategoryBar = styled.nav`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const CategoryItem = styled.div`
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.6);
    padding: 0 0.5rem;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.6);

    &:hover {
        border: 1px solid #2f9d27;
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
                    >{`#${keyword.username}`}</CategoryItem>
                );
            })}
        </CategoryBar>
    );
};

export default Category;
