import styled from "@emotion/styled";
import Card from "../../components/MainPage/MainContents/Card";
import { useState, useEffect } from "react";
import { searchValueState } from "../../recoil/atoms/searchValueState";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

import axios from "axios";

const MainContents = () => {
    const [cardInfo, setCardInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const searchValue = useRecoilValue(searchValueState);
    useEffect(() => {
        setIsLoading(true);

        const fetchDatas = async () => {
            try {
                const body = {
                    sido: searchValue.sido,
                    sigungu: searchValue.sigungu,
                    date: searchValue.date,
                    guestCount: searchValue.guestCount,
                    keywords: searchValue.keywords.join(","),
                    pageNum: page,
                    pageSize: 10,
                };
                console.log(body);
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                const response = await axios.get("/api/partyroom/search", {
                    params: body,
                    config,
                });
                const datas = await response.data.map((data) => ({
                    partyRoomDto: {
                        partyRoomId: data.partyRoomDto.partyRoomId,
                        partyRoomName: data.partyRoomDto.partyRoomName,
                        price: data.partyRoomDto.price,
                    },
                    partyRoomImage: {
                        partyRoomImageId: data.partyRoomImage?.partyRoomImageId,
                        thumbnail: data.partyRoomImageDtoList[0]
                            ? data.partyRoomImageDtoList[0]
                            : null,
                    },
                    customTags: data.customTags.slice(),
                    sigungu: data.partyRoomLocationDto.sigungu,
                }));

                setCardInfo((prevData) => [...prevData, ...datas]);
            } catch (e) {
                console.log(e);
            }
        };
        fetchDatas();
    }, [page, searchValue]);

    useEffect(() => {
        setPage(1);
        setCardInfo([]);
    }, [searchValue]);

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
                {cardInfo &&
                    cardInfo.map((info) => (
                        <Link to={`/detail/${info.partyRoomDto.partyRoomId}`}>
                            <Card
                                id={info.partyRoomDto.partyRoomId}
                                title={info.partyRoomDto.partyRoomName}
                                price={info.partyRoomDto.price}
                                thumbnail={info.partyRoomImage.thumbnail}
                                customTags={info.customTags}
                                sigungu={info.sigungu}
                            ></Card>
                        </Link>
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
