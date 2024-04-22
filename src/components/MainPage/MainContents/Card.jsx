import styled from "@emotion/styled";
import { IoLocationSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { loginState } from "../../../recoil/atoms/loginState";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Card = ({ info }) => {
    // props 정보
    const id = info.partyRoomDto.partyRoomId;
    const title = info.partyRoomDto.partyRoomName;
    const price = info.partyRoomDto.price;
    const thumbnail = info.partyRoomImage.thumbnail;
    const customTags = info.customTags;
    const sigungu = info.sigungu;
    const reviewCount = info.reviewCount;
    const bookmarkCount = info.bookmarkCount;
    const showCustomTags = info.customTags.slice(0, 3);

    const loginValue = useRecoilValue(loginState);
    const navigate = useNavigate();

    const handleMoveDetail = (e) => {
        if (e.target.tagName === "path") return;
        navigate(`/detail/${id}`);
    };

    const [isBookmarked, setIsBookmarked] = useState(info.bookmarked);

    const handleAddFavorite = async () => {
        if (loginValue) {
            try {
                const token = localStorage.getItem("refresh_token");
                const res = await axios.post(
                    `/partyroom/bookmark/${id}`,
                    {},
                    {
                        headers: {
                            Authorization: token,
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (res.status === 200) {
                    setIsBookmarked(true); // 상태 업데이트
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            navigate("/signin");
        }
    };

    const handleDeleteFavorite = async () => {
        if (loginValue) {
            try {
                const token = localStorage.getItem("refresh_token");
                const res = await axios.delete(
                    `/partyroom/bookmark/${id}`,

                    {
                        headers: {
                            Authorization: token,
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log(res.status);
                if (res.status === 200) {
                    setIsBookmarked(false); // 상태 업데이트
                }
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <Container id={id} onClick={handleMoveDetail}>
            <CardImage
                id={thumbnail?.partyRoomImageId}
                style={{ backgroundImage: `url(${thumbnail?.imageFileName})` }}
            >
                {isBookmarked ? (
                    <FaHeart
                        className="favorite_full"
                        onClick={handleDeleteFavorite}
                    />
                ) : (
                    <FaHeart className="favorite" onClick={handleAddFavorite} />
                )}
            </CardImage>
            <CardDescription>
                <Title>{title}</Title>
                <Location>
                    <IoLocationSharp />
                    {sigungu}
                </Location>
                <Keywords>
                    {showCustomTags?.map((tag) => (
                        <Keyword id={tag.tagId}>{tag.tagContent}</Keyword>
                    ))}
                </Keywords>
                <Footer>
                    <Price>
                        ₩
                        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        / 시간
                    </Price>
                    <Into>
                        <div>
                            <CiHeart></CiHeart>
                            <span>{bookmarkCount}</span>
                        </div>
                        <div>
                            <FaRegComment />
                            <span>{reviewCount}</span>
                        </div>
                    </Into>
                </Footer>
            </CardDescription>
        </Container>
    );
};

export default Card;

const Container = styled.div`
    width: 20vw;
    height: 48vh;
    border: 1px solid black;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 1rem 0rem;
    overflow: hidden;
    cursor: pointer;
`;

const CardImage = styled.div`
    width: 100%;
    height: 70%;
    overflow: hidden;
    background-size: cover;
    position: relative;

    .favorite {
        display: block;
        position: absolute;
        width: 30px;
        height: 30px;
        right: 15px;
        top: 15px;
        cursor: pointer;
        stroke: white;
        stroke-width: 12;
        fill: rgba(0, 0, 0, 0.5);
        &:hover {
            fill: red;
        }
    }

    .favorite_full {
        display: block;

        position: absolute;
        width: 30px;
        height: 30px;
        right: 15px;
        top: 15px;
        cursor: pointer;
        stroke: white;
        stroke-width: 12;
        fill: red;
        &:hover {
            fill: rgba(0, 0, 0, 0.5);
        }
    }
`;

const CardDescription = styled.div`
    color: black;
    width: 100%;
    height: 30%;
    border-top: 1px solid black;
    box-sizing: border-box;
    display: flex;
    padding: 0px 1.125rem;
    flex-direction: column;
`;

const Title = styled.div`
    height: 25%;
    line-height: 200%;
    font-size: 1.1rem;
    font-weight: 600;
`;

const Location = styled.div`
    height: 25%;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    line-height: 200%;
`;

const Keywords = styled.div`
    height: 25%;
    display: flex;
`;
const Keyword = styled.div`
    padding: 0 5px;
    font-size: 0.6rem;
    line-height: 230%;
    text-align: center;
    border: 1px solid black;
    border-radius: 5px;
    margin-right: 10px;
`;

const Footer = styled.div`
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Price = styled.div`
    font-size: 1rem;
`;
const Into = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-around;
    font-size: 0.8rem;

    & > div {
        display: flex;
        align-items: center;
    }
    & > div > span {
        margin-left: 3px;
    }
`;
