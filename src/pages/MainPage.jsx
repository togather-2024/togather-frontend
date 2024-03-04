import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import MainSearch from "../components/MainPage/MainSearch";
import MainCategory from "../components/MainPage/MainCategory";
import MainContents from "../components/MainPage/MainContents";
import ProfileDropdown from "../components/Profile/ProfileDropdown";

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100vh-64px);
`;

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
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/photos/"
                );
                setPhotos(
                    response.data
                        .filter((_, idx) => idx < 100)
                        .map((el) => el.thumbnailUrl)
                );
            } catch (e) {
                console.log(e);
            }
        };
        fetchPhotos();
        fetchKeyword();
    }, []);

    return (
        <>
            {/* profile dropdown은 Link to */}
            {/* <ProfileDropdown></ProfileDropdown> */}
            <Container>
                <MainSearch></MainSearch>
                <MainCategory keywords={keywords}></MainCategory>
                {/* 카테고리 값과 , 검색 결과 변수 바뀔 때마다 Contents 내용 변경 */}
                <MainContents photos={photos}></MainContents>
            </Container>
        </>
    );
};

export default MainPage;
