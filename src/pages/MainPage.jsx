import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import MainSearch from "../components/MainPage/MainSearch";
import MainCategory from "../components/MainPage/MainCategory";
import MainContents from "../components/MainPage/MainContents";
import ProfileDropdown from "../components/Profile/ProfileDropdown";

const Container = styled.div`
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100vh-64px);
    z-index: 0;
`;

const MainPage = () => {
    const [keywords, setKeywords] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [open, setOpen] = useState(false);

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
            <Container>
                <button
                    style={{ width: "3vw" }}
                    onClick={() => {
                        setOpen(!open);
                        console.log(open);
                    }}
                >
                    누르면
                </button>
                <ProfileDropdown open={open}></ProfileDropdown>
                <MainSearch></MainSearch>
                <MainCategory keywords={keywords}></MainCategory>
                {/* 카테고리 값과 , 검색 결과 변수 바뀔 때마다 Contents 내용 변경 */}
                <MainContents photos={photos}></MainContents>
            </Container>
        </>
    );
};

export default MainPage;
