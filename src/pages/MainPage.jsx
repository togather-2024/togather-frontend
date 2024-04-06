import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import MainSearch from "../components/MainPage/MainSearch";
import MainCategory from "../components/MainPage/MainCategory";
import Card from "../components/MainPage/MainContents/Card";

const MainPage = () => {
    const [keywords, setKeywords] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchKeyword = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users/"
                );
                setKeywords(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchKeyword();
    }, [keywords]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/photos/"
                );
                const data = await response.data
                    .filter((_, idx) => idx < 42)
                    .map((el) => el.thumbnailUrl);

                setPhotos(data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchPhotos();
    }, [photos]);
    return (
        <>
            {/* profile dropdown은 Link to */}
            <Container>
                <MainSearch></MainSearch>
                <MainCategory keywords={keywords}></MainCategory>
                {/* 카테고리 값과 , 검색 결과 변수 바뀔 때마다 Contents 내용 변경 */}
                <MainContents>
                    {photos &&
                        photos.map((photo, idx) => (
                            <Card key={idx} photo={photo}></Card>
                        ))}
                    {/* {isLoading && <p>Loading</p>} */}
                </MainContents>
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

const MainContents = styled.div`
    width: 92vw;
    display: flex;
    gap: 0px 3.6rem;
    flex-wrap: wrap;
`;
