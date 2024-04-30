import styled from "@emotion/styled";
import Card from "../../components/MainPage/MainContents/Card";
import { useState, useEffect } from "react";
import { searchValueState } from "../../recoil/atoms/searchValueState";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/atoms/loginState";

import axios from "axios";

const MainContents = () => {
    const [cardInfo, setCardInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [page, setPage] = useState(1);

    const searchValue = useRecoilValue(searchValueState);
    const loginValue = useRecoilValue(loginState);

    /* 데이터 호출 */
    const fetchDatas = async () => {
        setIsLoading(false);
        console.log(page);
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
            setIsLoading(true);
        } catch (e) {
            console.log(e);
        }
    };

    // isLoading이 참으로 바뀌면 관찰을 시작하고 아니면 관찰을 종료하면 되잖아
    useEffect(() => {
        fetchDatas();
    }, [searchValue, page, loginState]);
    useEffect(() => {
        setPage(1);
        setCardInfo([]);
    }, [searchValue]);

    const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting && isLoading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 0.2,
        });
        const observerTarget = document.getElementById("observer");
        if (observerTarget) {
            observer.observe(observerTarget);
        }
    });

    return (
        <>
            <Container>
                {cardInfo && cardInfo.map((info) => <Card info={info}></Card>)}
            </Container>
            {isLoading && <div id="observer" style={{ height: "30px" }}></div>}
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
