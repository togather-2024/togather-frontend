import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { size } from "../styles/fonts";
import { weight } from "../styles/fonts";
import Booking from "../components/Booking";

const RoomDetail = () => {
  return (
    <>
      <ImgContainer>
        <HeartContainer>
          <FaHeart size="15" color="#ABABAB" />
        </HeartContainer>
        <FirstImg></FirstImg>
        <SmallImgContainer>
          <SmallImg />
          <SmallImg />
          <SmallImg />
          <SmallImg />
        </SmallImgContainer>
      </ImgContainer>
      <Contents>
        <LeftContents>
          <Intro>
            <RoomName>공간 이름</RoomName>
            <Summary>지역 • 최대 인원 n 명 • 후기 n 건</Summary>
            <TagList>
              <Tag>#키워드</Tag>
              <Tag>#키워드</Tag>
              <Tag>#키워드</Tag>
            </TagList>
          </Intro>
          <DescriptionContainer>
            <Subheading>공간 설명</Subheading>
            <Description>
              공간에 대한 설명입니다.공간에 대한 설명입니다.공간에 대한
              설명입니다.공간에 대한 설명입니다.공간에 대한 설명입니다.공간에
              대한 설명입니다.공간에 대한 설명입니다.공간에 대한
              설명입니다.공간에 대한 설명입니다.공간에 대한 설명입니다.공간에
              대한 설명입니다.공간에 대한 설명입니다.공간에 대한
              설명입니다.공간에 대한 설명입니다.공간에 대한 설명입니다.공간에
              대한 설명입니다.공간에 대한 설명입니다.공간에 대한
              설명입니다.공간에 대한 설명입니다.공간에 대한 설명입니다.공간에
              대한 설명입니다.공간에 대한 설명입니다.공간에 대한
              설명입니다.공간에 대한 설명입니다.공간에 대한 설명입니다.공간에
              대한 설명입니다.공간에 대한 설명입니다.공간에 대한 설명입니다.
            </Description>
          </DescriptionContainer>
          <LocationContainer>
            <Subheading>위치</Subheading>
            <Map></Map>
          </LocationContainer>
          <ReviewContainer>
            <ReviewHeading>이용 후기</ReviewHeading>
            <ReviewCount>n 건</ReviewCount>
            <ReviewList>
              <Review>
                <ReviewInfo>
                  <ReviewProfile>
                    <CgProfile /> 000
                  </ReviewProfile>
                  <CreatedAt>0000년 00월 00일</CreatedAt>
                </ReviewInfo>
                <ReviewContent>
                  이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기
                </ReviewContent>
              </Review>
              <Review>
                <ReviewInfo>
                  <ReviewProfile>
                    <CgProfile />
                    000
                  </ReviewProfile>
                  <CreatedAt>0000년 00월 00일</CreatedAt>
                </ReviewInfo>
                <ReviewContent>
                  이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기
                </ReviewContent>
              </Review>
              <Review>
                <ReviewInfo>
                  <ReviewProfile>
                    <CgProfile /> 000
                  </ReviewProfile>
                  <CreatedAt>0000년 00월 00일</CreatedAt>
                </ReviewInfo>
                <ReviewContent>
                  이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기이용후기
                </ReviewContent>
              </Review>
            </ReviewList>
          </ReviewContainer>
        </LeftContents>
        <RightContents>
          <RightInner>
            <Booking />
            <HostContainer>
              <Subheading>호스트</Subheading>
            </HostContainer>
          </RightInner>
        </RightContents>
      </Contents>
    </>
  );
};

export default RoomDetail;

const HeartContainer = styled.div`
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  background-color: white;
  margin-right: 10px;
  cursor: pointer;
`;

const ImgContainer = styled.div`
  margin: 32px 0;
  display: flex;
  position: relative;
  height: 400px;
  gap: 10px;
`;

const FirstImg = styled.div`
  background-color: ${colors.gray30};
  flex-grow: 1;
  border-radius: 10px;
`;
const SmallImgContainer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
const SmallImg = styled.div`
  background-color: ${colors.gray30};
  border-radius: 10px;
`;

const Contents = styled.div`
  border: 1px solid blue;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const LeftContents = styled.div`
  border: 1px solid red;
  flex: 2;
  display: flex;
  flex-direction: column;
  padding-right: 60px;
`;

const Intro = styled.div``;

const RoomName = styled.div`
  font-size: ${size.h2};
  font-weight: ${weight.bold};
  margin-bottom: 12px;
`;

const Summary = styled.div`
  color: ${colors.gray50};
`;

const TagList = styled.div`
  display: flex;
  gap: 12px;
  margin: 16px 0 40px 0;
`;

const Tag = styled.div`
  background-color: ${colors.point04};
  padding: 6px 12px;
  border-radius: 15px;
`;

const DescriptionContainer = styled.div`
  flex-grow: 1;
  margin-bottom: 40px;
`;

const Subheading = styled.div`
  font-size: ${size.h4};
  font-weight: ${weight.semibold};
  margin-bottom: 16px;
`;
const Description = styled.div`
  line-height: 1.5;
  white-space: wrap;
`;
const LocationContainer = styled.div`
  margin-bottom: 40px;
`;

const Map = styled.div`
  height: 300px;
  background-color: ${colors.gray30};
  border-radius: 20px;
`;
const ReviewContainer = styled.div`
  margin-bottom: 40px;
`;

const ReviewHeading = styled(Subheading)`
  display: inline-block;
  margin-right: 16px;
`;

const ReviewCount = styled.span`
  color: ${colors.gray30};
`;
const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Review = styled.div``;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ReviewProfile = styled.div`
  font-weight: ${weight.medium};
`;

const CreatedAt = styled.div`
  font-size: ${size.caption};
`;

const ReviewContent = styled.div``;

const RightContents = styled(LeftContents)`
  border: 1px solid green;
  flex: 1;
  padding: 0;
  position: relative;
`;

const RightInner = styled.div`
  position: sticky;
  top: 20px;
`;
const HostContainer = styled.div`
  border: 3px solid ${colors.point01};
  border-radius: 30px;
  padding: 30px;
`;

const HostProfile = styled.div``;
const HostName = styled.div`
  font-weight: ${weight.semibold};
`;
