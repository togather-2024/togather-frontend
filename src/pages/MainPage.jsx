import styled from "@emotion/styled";

import MainSearch from "../components/MainPage/MainSearch";
import MainCategory from "../components/MainPage/MainCategory";
import MainContents from "../components/MainPage/MainContents";

const MainPage = () => {
    return (
        <>
            <Container>
                <MainSearch></MainSearch>
                <MainCategory></MainCategory>
                {/* props로 전달한 후 렌더링 시키면 될 것 같음 */}
                <MainContents></MainContents>
            </Container>
        </>
    );
};

export default MainPage;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100vh-64px);
`;
