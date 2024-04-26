import styled from "@emotion/styled";
import Card from "../../components/MainPage/MainContents/Card";
import { useState, useEffect, useCallback } from "react";
import { searchValueState } from "../../recoil/atoms/searchValueState";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/atoms/loginState";

import axios from "axios";

const MainContents = () => {
    const [cardInfo, setCardInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const searchValue = useRecoilValue(searchValueState);
    const loginValue = useRecoilValue(loginState);

    /* pagination에 따른 데이터를 로드합니다. */
    const fetchDatas = useCallback(async () => {
        setIsLoading(true);
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
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            if (loginValue) {
                const token = localStorage.getItem("refresh_token");
                config.headers["Authorization"] = token;
            }

            const response = await axios.get("/api/partyroom/search", {
                params: body,
                headers: config.headers,
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
                reviewCount: data.reviewCount,
                bookmarkCount: data.bookmarkCount,
                bookmarked: data.bookmarked,
            }));

            setCardInfo((prevData) => [...prevData, ...datas]);
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [page, searchValue, loginValue]);
    /* 첫 렌더링 포함 */
    // 첫 렌더링 이후에 하면 안되나 ?
    useEffect(() => {
        fetchDatas();
    }, [page, searchValue, loginValue]);

    /* 검색창에 검색 값을 입력하면 기존 데이터들을 배우고 새로운 데이터를 받아옵니다.*/
    useEffect(() => {
        setPage(1);
        setCardInfo([]);
    }, [searchValue]);

    /* 지정한 div(#observer)와 스크롤의 위치가 교차하게 되면 page를 증가시킵니다.*/
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
    }, []);

    return (
        <>
            <Container>
                {cardInfo && cardInfo.map((info) => <Card info={info}></Card>)}
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
