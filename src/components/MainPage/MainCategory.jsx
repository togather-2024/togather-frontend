import styled from "@emotion/styled";
import Category from "./MainCategory/Category";
import Filter from "./MainCategory/Filter";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
    margin: 30px 0px 20px 0px;
    width: 92vw;
    height: 7vh;
    display: flex;
    align-items: center;
`;

const MainCategory = () => {
    const [keywords, setKeywords] = useState([]);
    useEffect(() => {
        const fetchKeyword = async () => {
            try {
                const response = await axios.get(
                    "api/partyroom/tags/getPopular"
                );
                setKeywords(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchKeyword();
    }, [keywords]);

    return (
        <Container>
            <Category keywords={keywords}></Category>
            <Filter></Filter>
        </Container>
    );
};

export default MainCategory;
