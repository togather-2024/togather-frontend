import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { weight } from "../../styles/fonts";

const ReservationInfo = ({ data, paymentStatus, reservationId }) => {
  //날짜 포맷
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}.${month}.${day}`;
  };

  //시간 추출
  const extractTime = (dateTimeString) => {
    const time = dateTimeString.split("T")[1];
    const result = time.slice(0, 5);
    return result;
  };
  //가격
  const priceToString = (price) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const startTime =
    data && extractTime(data?.partyRoomReservationDto?.startTime);
  const endTime = data && extractTime(data?.partyRoomReservationDto?.endTime);
  const reservedHours =
    Number(data && endTime.slice(0, 2)) - Number(data && startTime.slice(0, 2));
  const totalAmount = data?.partyRoomReservationDto?.totalPrice;
  const paymentMethod = data?.partyRoomReservationDto?.paymentDto?.method;
  const guestName =
    data?.partyRoomReservationDto?.reservationGuestDto?.memberName;
  const bookedDate = formatDate(data?.partyRoomReservationDto?.bookedDate);
  const usingDate = formatDate(data?.partyRoomReservationDto?.startTime);
  const guestCount = data?.partyRoomReservationDto?.guestCount;
  const locationDto = data?.partyRoomLocationDto;
  const address = `${locationDto?.sido} ${locationDto?.sigungu} ${locationDto?.roadName || ""} ${locationDto?.roadAddress || locationDto?.jibunAddress || ""}`;

  return (
    <Container>
      <Section>
        <LabelContainer>
          <InfoLabel>예약자명</InfoLabel>
          <InfoLabel>예약일</InfoLabel>
          <InfoLabel>예약 번호</InfoLabel>
        </LabelContainer>
        <TextContainter>
          <Text>{guestName}</Text>
          <Text>{bookedDate}</Text>
          <Text>{reservationId}</Text>
        </TextContainter>
      </Section>

      <Section>
        <LabelContainer>
          <InfoLabel>이용일</InfoLabel>
          <InfoLabel>이용 시간</InfoLabel>
          <InfoLabel>이용 인원</InfoLabel>
          <InfoLabel>공간 주소</InfoLabel>
        </LabelContainer>
        <TextContainter>
          <Text>{usingDate}</Text>
          <Text>
            {startTime} - {endTime} ({reservedHours}시간)
          </Text>
          <Text>{guestCount}명</Text>
          <Text>{address}</Text>
        </TextContainter>
      </Section>

      <Section>
        <LabelContainer>
          <InfoLabel>결제 상태</InfoLabel>
          <InfoLabel>결제 수단</InfoLabel>
          <InfoLabel>총 결제 금액</InfoLabel>
        </LabelContainer>
        <TextContainter>
          <Text>{paymentStatus}</Text>
          <Text>{paymentMethod}</Text>
          <Price>{priceToString(totalAmount)}</Price>
        </TextContainter>
      </Section>
    </Container>
  );
};

export default ReservationInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 52px;
`;

const Section = styled.div`
  border-left: 2px solid ${colors.point02};
  padding-left: 44px;
  display: flex;
  gap: 80px;
`;

const InfoLabel = styled.div`
  font-weight: ${weight.medium};
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100px;
`;

const TextContainter = styled(LabelContainer)`
  width: auto;
`;

const Text = styled.div``;

const Price = styled.div`
  color: #f24b4b;
`;
