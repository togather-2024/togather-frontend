import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { size, weight } from "../../../styles/fonts";
import { IoLocationSharp } from "react-icons/io5";

const ReservationItem = ({ data }) => {
  const reservationId = data?.partyRoomReservationDto?.reservationId;
  const partyroomName =
    data?.partyRoomReservationDto?.partyRoomDto?.partyRoomName;
  const thumbnail = data?.partyRoomImageDto?.imageFileName;

  const region = data?.partyRoomLocationDto?.sigungu;
  const price = data?.partyRoomReservationDto?.totalPrice;
  function priceToString(price) {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //날짜관련
  const date = new Date(data?.partyRoomReservationDto?.startTime);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const formattedDate = `${year}.${month}.${day}`;

  const dayOfWeek = date.getDay();
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayText = daysOfWeek[dayOfWeek];

  //시간 관련
  function extractTime(dateTimeString) {
    const time = dateTimeString.split("T")[1];
    const result = time.slice(0, 5);
    return result;
  }

  const startTime =
    data && extractTime(data?.partyRoomReservationDto?.startTime);
  const endTime = data && extractTime(data?.partyRoomReservationDto?.endTime);
  const reservedHours =
    Number(data && endTime.slice(0, 2)) - Number(data && startTime.slice(0, 2));

  return (
    <Container>
      <Thumbnail src={thumbnail} alt="partyroomimg"></Thumbnail>
      <InfoContainer>
        <BookState>결제완료</BookState>
        <BookInfo>
          <CaptionWrapper>
            <BoldCaption> 예약번호</BoldCaption>
            <ColoredCaption>{reservationId}</ColoredCaption>
          </CaptionWrapper>
        </BookInfo>
        <PlaceInfo>
          <Title>{partyroomName}</Title>
          <RegionWrapper>
            <IoLocationSharp />
            <Region>{region}</Region>
          </RegionWrapper>
        </PlaceInfo>
        <PlainText>
          {formattedDate} ({dayText}) {startTime} ~ {endTime}시 ,{" "}
          {reservedHours}시간
        </PlainText>
        <Price>₩ {priceToString(price)}</Price>
      </InfoContainer>
    </Container>
  );
};

export default ReservationItem;

const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 12px;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: ${colors.hover01};
  }
`;

const Thumbnail = styled.img`
  width: 200px;
  height: 200px;
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
