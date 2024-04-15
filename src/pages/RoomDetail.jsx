import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { size, weight } from "../styles/fonts";
import Booking from "../components/RoomDetail/Booking";
import RoomDetailAPI from "../components/RoomDetail/RoomDetailAPI";
import TagItem from "../components/RoomDetail/TagItem";
import Host from "../components/RoomDetail/Host";
import ReviewContainer from "../components/RoomDetail/Review/ReviewContainer";
import ImgContainer from "../components/RoomDetail/RoomImg/ImgContainer";
import LocationContainer from "../components/RoomDetail/Map/LocationContainer";

const RoomDetail = () => {
  const data = RoomDetailAPI();
  const roomName = data?.partyRoomDto?.partyRoomName;
  const region = data?.partyRoomLocationDto?.sigungu;
  const guestCapacity = data?.partyRoomDto?.guestCapacity;
  const partyRoomDesc = data?.partyRoomDto?.partyRoomDesc;

  const tagList = data?.customTags?.map((list) => (
    <TagItem key={list.tagId} data={list} />
  ));
  return (
    <>
      <ImgContainer data={data} />
      <Contents>
        <LeftContents>
          <Intro>
            <RoomName>{roomName}</RoomName>
            <Summary>
              {region} • 최대 인원 {guestCapacity} 명
            </Summary>
            <TagList>{tagList}</TagList>
          </Intro>
          <DescriptionContainer>
            <Subheading>공간 설명</Subheading>
            <Description>{partyRoomDesc}</Description>
          </DescriptionContainer>
          <LocationContainer data={data} />
          <ReviewContainer />
        </LeftContents>
        <RightContents>
          <RightInner>
            <Booking data={data} />
            <Host data={data?.partyRoomDto?.partyRoomHost} />
          </RightInner>
        </RightContents>
      </Contents>
    </>
  );
};

export default RoomDetail;

const Contents = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 1000px;
`;
const LeftContents = styled.div`
  /* border: 1px solid red; */
  flex: 2;
  display: flex;
  flex-direction: column;
  padding-right: 60px;
  margin-bottom: auto;
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
  flex-wrap: wrap;
  gap: 12px;
  margin: 16px 0 40px 0;
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

const RightContents = styled(LeftContents)`
  margin-bottom: 0;
  /* border: 1px solid green; */
  flex: 1;
  padding: 0;
`;

const RightInner = styled.div`
  position: sticky;
  top: 100px;
`;
