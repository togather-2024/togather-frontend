import styled from "@emotion/styled";
import Card from "../../components/MainPage/MainContents/Card";
import { useState, useEffect } from "react";
import axios from "axios";

const MainContents = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(
                    `https://api.thedogapi.com/v1/images/search?size=small&format=json&has_breeds=true&order=ASC&page=${page}&limit=10`
                );
                const data = await response.data.map((dogImg) => ({
                    id: dogImg.id,
                    dogUrl: dogImg.url,
                }));

                setPhotos((prevPhotos) => [...prevPhotos, ...data]);
            } catch (e) {
                console.log(e);
            }
        };
        fetchPhotos();
    }, [page]);

    const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 0,
        });
        const observerTarget = document.getElementById("observer");
        if (observerTarget) {
            observer.observe(observerTarget);
        }
    });

    return (
        <>
            <Container>
                {photos &&
                    photos.map((photo) => (
                        <Card key={photo.id} photo={photo.dogUrl}></Card>
                    ))}
            </Container>
            <div id="observer" style={{ height: "20px" }}></div>
        </>
    );
};

export default MainContents;

const Container = styled.div`
    width: 92vw;
    display: flex;
    gap: 0px 3.6rem;
    flex-wrap: wrap;
`;
