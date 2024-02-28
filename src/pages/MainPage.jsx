import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import MainSearch from "../components/MainPage/MainSearch";
import MainCategory from "../components/MainPage/MainCategory";
import MainContents from "../components/MainPage/MainContents";
import Header from "../components/Header";
import ProfileDropdown from "../components/Profile/ProfileDropdown";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100vh-64px);
`;

const MainPage = () => {
    const [keywords, setKeywords] = useState([]);

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
    }, []);

    return (
        <>
            <Header></Header>
            <ProfileDropdown></ProfileDropdown>
            <Container>
                <MainSearch></MainSearch>
                <MainCategory keywords={keywords}></MainCategory>
                <MainContents></MainContents>
            </Container>
        </>
    );
};

export default MainPage;
