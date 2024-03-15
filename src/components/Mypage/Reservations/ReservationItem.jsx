import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { size, weight } from "../../../styles/fonts";
import { IoLocationSharp } from "react-icons/io5";

const ReservationItem = () => {
  return (
    <Container>
      <Thumbnail></Thumbnail>
      <InfoContainer>
        <BookState>결제완료</BookState>
        <BookInfo>
          <CaptionWrapper>
            <BoldCaption> 예약번호</BoldCaption>
            <ColoredCaption>0000000</ColoredCaption>
          </CaptionWrapper>
          <CaptionWrapper>
            <BoldCaption>예약날짜</BoldCaption>
            <BoldCaption>0000년 00월 00일</BoldCaption>
          </CaptionWrapper>
        </BookInfo>
        <PlaceInfo>
          <Title>투게더 서울 스튜디오</Title>
          <RegionWrapper>
            <IoLocationSharp />
            <Region>역삼</Region>
          </RegionWrapper>
        </PlaceInfo>
        <PlainText>2024.02.04 (일) 10 ~ 17시 , 7시간</PlainText>
        <Price>₩ 350,000</Price>
      </InfoContainer>
    </Container>
  );
};

export default ReservationItem;

const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 12px;
  &:hover {
    background-color: ${colors.hover01};
  }
`;

const Thumbnail = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${colors.gray30};
  border-radius: 15px;
`; //썸네일 이미지

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BookState = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 6px 10px;
  border-radius: 20px;
  font-size: ${size.caption};
  width: fit-content;
`;

const BookInfo = styled.div`
  display: flex;
  gap: 24px;
`;

const CaptionWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const BoldCaption = styled.p`
  font-size: ${size.caption};
  font-weight: ${weight.semibold};
`;

const ColoredCaption = styled(BoldCaption)`
  color: ${colors.dark};
`;

const PlaceInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: ${size.body02};
  font-weight: ${weight.bold};
`;

const RegionWrapper = styled.div`
  display: flex;
  color: ${colors.gray30};
  align-items: center;
  gap: 4px;
`;

const Region = styled.p``;

const PlainText = styled.p`
  font-weight: ${weight.medium};
`;

const Price = styled.p`
  font-weight: ${weight.semibold};
`;
