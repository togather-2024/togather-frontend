import styled from "@emotion/styled";
import { IoLocationSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
// import Cat from "../../../assets/cat.1014.jpg";

const Container = styled.div`
    width: 20vw;
    height: 48vh;
    border: 1px solid black;
    border-radius: 25px;
    cursor:pointer
    display: flex;
    flex-direction: column;
    margin:1rem 0rem;
    overflow: hidden;
    cursor:pointer;
`;

const CardImage = styled.div`
    width: 100%;
    height: 70%;
    overflow: hidden;
    background-size: cover;
`;

const CardDescription = styled.div`
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
    width: 15%;
    height: 80%;
    font-size: 0.6rem;
    line-height: 220%;
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
const Card = ({ photo }) => {
    return (
        <Container>
            <CardImage style={{ backgroundImage: `url(${photo})` }}></CardImage>
            <CardDescription>
                <Title>투게더 서울 스튜디오</Title>
                <Location>
                    <IoLocationSharp />
                    역삼
                </Location>
                <Keywords>
                    <Keyword>#키워드</Keyword>
                    <Keyword>#키워드</Keyword>
                    <Keyword>#키워드</Keyword>
                </Keywords>
                <Footer>
                    <Price>₩ 250,000 / 시간</Price>
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
