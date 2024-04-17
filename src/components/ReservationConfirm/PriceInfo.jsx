import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { size, weight } from "../../styles/fonts";

const PriceInfo = () => {
  const PriceInfo = ({ data }) => {
    const partyroomName =
      data?.partyRoomReservationDto?.partyRoomDto?.partyRoomName;
    const region = data?.partyRoomLocationDto?.sigungu;
    const guestCapacity =
      data?.partyRoomReservationDto?.partyRoomDto?.guestCapacity;
    function priceToString(price) {
      return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const pricePerHour = data?.partyRoomReservationDto?.partyRoomDto?.price;
    const totailPrice = data?.partyRoomReservationDto?.totalPrice;

    function extractTime(dateTimeString) {
      const time = dateTimeString.split("T")[1];
      const result = time.slice(0, 5);
      return result;
    }

    const startTime =
      data && extractTime(data?.partyRoomReservationDto?.startTime);
    const endTime = data && extractTime(data?.partyRoomReservationDto?.endTime);
    const reservedHours =
      Number(data && endTime.slice(0, 2)) -
      Number(data && startTime.slice(0, 2));
    return (
      <Container>
        <Img></Img>
        <RoomInfo>
          <RoomName>{partyroomName}</RoomName>
          <Summary>
            {region} • 최대 인원 {guestCapacity} 명 • 후기 n 건
          </Summary>
          <TagList>
            <Tag>#키워드</Tag>
            <Tag>#키워드</Tag>
            <Tag>#키워드</Tag>
          </TagList>
        </RoomInfo>
        <Total>
          <BoldText>총 결제 금액</BoldText>
          <Text>
            ₩ {priceToString(pricePerHour)} * {reservedHours}시간
          </Text>
        </Total>
        <Line />
        <TotalPrice>₩ {priceToString(totailPrice)}</TotalPrice>
      </Container>
    );
  };
};
export default PriceInfo;

const Container = styled.div`
  border: 1px solid ${colors.point03};
  padding: 30px;
  border-radius: 30px;
`;

const Img = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: ${colors.gray50};
`;

const RoomInfo = styled.div`
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RoomName = styled.div`
  font-size: ${size.body02};
  font-weight: ${weight.semibold};
`;

const Summary = styled.div`
  color: ${colors.gray50};
`;

const Tag = styled.div`
  background-color: ${colors.point04};
  padding: 6px 12px;
  border-radius: 15px;
`;

const TagList = styled.div`
  display: flex;
  gap: 12px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoldText = styled.div`
  font-weight: ${weight.semibold};
`;

const Text = styled.div``;

const Line = styled.hr`
  margin: 18px 0;
  border: 1px solid ${colors.gray10};
`;

const TotalPrice = styled.div`
  font-size: ${size.h3};
  font-weight: ${weight.semibold};
  color: ${colors.point01};
  display: flex;
  justify-content: end;
`;
