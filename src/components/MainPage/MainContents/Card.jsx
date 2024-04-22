import styled from "@emotion/styled";
import { IoLocationSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import axios from "axios";

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

    .star {
        position: absolute;
        width: 40px;
        height: 40px;
        right: 10px;
        top: 10px;
        cursor: pointer;

        &:hover {
            background-color: white;
        }
    }
    .star polyline {
        stroke: rgb(148, 205, 116);
    }
    .star_full {
        position: absolute;
        width: 40px;
        height: 40px;
        right: 10px;
        top: 10px;
        cursor: pointer;
        &:hover {
            background-color: white;
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

// props로 이미지 , 이름 , 위치 , 키워드 , 금액 , 댓글 정보 , 좋아요 정보
const Card = ({ info }) => {
    const id = info.partyRoomDto.partyRoomId;
    const title = info.partyRoomDto.partyRoomName;
    const price = info.partyRoomDto.price;
    const thumbnail = info.partyRoomImage.thumbnail;
    const customTags = info.customTags;
    const sigungu = info.sigungu;

    const [favorite, setFavorite] = useState(true);
    const showCustomTags = customTags.slice(0, 3);
    const handleAddFavorite = () => {
        try {
            axios.post(`/partyroom/bookmark/${id}`);
        } catch (e) {
            console.log(e);
        }
    };
    const handleDeleteFavorite = () => {
        try {
            axios.delete(`/partyroom/bookmark/${id}`);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <Container id={id}>
            <CardImage
                id={thumbnail?.partyRoomImageId}
                style={{ backgroundImage: `url(${thumbnail?.imageFileName})` }}
            >
                {favorite ? (
                    <MdOutlineStarPurple500
                        className="star"
                        onClick={handleAddFavorite}
                    />
                ) : (
                    <MdOutlineStarOutline
                        className="star_full"
                        color="yellow"
                        onClick={handleDeleteFavorite}
                    />
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
                            <span>5</span>
                        </div>
                        <div>
                            <FaRegComment />
                            <span>6</span>
                        </div>
                    </Into>
                </Footer>
            </CardDescription>
        </Container>
    );
};

export default Card;
