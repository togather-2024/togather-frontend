import styled from "@emotion/styled";
import Card from "./MainContents/Card";
import { useCallback } from "react";
import { List, InfiniteLoader } from "react-virtualized";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2vh;

    // grid-template-columns: repeat(4, 1fr);
    // grid-auto-rows: minmax(1fr, auto);
`;
const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2vh;
`;

const MainContents = () => {
    const cards = Array(1000)
        .fill(0)
        .map((_, idx) => idx + 1);
    const isRowLoaded = ({ index }) => {
        // 해당 인덱스의 행이 로드되었는지 확인
        return !!cards[index];
    };

    const loadMoreRows = ({ startIndex, stopIndex }) => {
        // 더 많은 행을 로드하는 비동기 함수
        // 이 예제에서는 필요한 경우에만 로드되도록 설정
        return new Promise((resolve) => {
            // 여기서 데이터를 더 가져와서 cards 배열에 추가합니다.
            resolve();
        });
    };

    const rowRenderer = useCallback(
        ({ key, index, style }) => {
            const rowCards = cards.slice(index * 4, index * 4 + 4); // 한 줄에 4개의 Card를 보여주기 위해 해당하는 범위의 Card를 추출

            return (
                <InnerContainer>
                    {rowCards.map((_, idx) => (
                        <Card key={idx}></Card>
                    ))}
                </InnerContainer>
            );
        },
        [cards]
    );
    return (
        <Container>
            <InfiniteLoader
                isRowLoaded={isRowLoaded}
                loadMoreRows={loadMoreRows}
                rowCount={cards.length}
            >
                {({ onRowsRendered, registerChild }) => (
                    <List
                        ref={registerChild}
                        onRowsRendered={onRowsRendered}
                        width={1988}
                        height={700}
                        rowCount={cards.length}
                        rowHeight={546.75}
                        rowRenderer={rowRenderer}
                        style={{ outline: "none" }}
                    />
                )}
            </InfiniteLoader>
        </Container>
    );
};
export default MainContents;
