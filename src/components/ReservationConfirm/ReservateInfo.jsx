import React from "react";
import styled from "@emotion/styled";
import { size, weight } from "../../styles/fonts";
import { colors } from "../../styles/colors";

const ReservateInfo = ({ data }) => {
  const date = new Date(data?.partyRoomReservationDto?.startTime);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
  const day = date.getDate();
  const dateString = year + "년 " + month + "월 " + day + "일";
  const geustCount = data?.partyRoomReservationDto?.guestCount;

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
      <TopSection>
        <Heading>예약 정보</Heading>
      </TopSection>
      <BottomSection>
        <DataContainer>
          <Subheading>날짜</Subheading>
          <Text>{dateString}</Text>
        </DataContainer>
        <DataContainer>
          <Subheading>시간</Subheading>
          <Text>
            {startTime} ~ {endTime} (총 {reservedHours}시간)
          </Text>
        </DataContainer>
        <DataContainer>
          <Subheading>인원</Subheading>
          <Text>{geustCount}명</Text>
        </DataContainer>
      </BottomSection>
    </Container>
  );
};

export default ReservateInfo;

const Container = styled.div`
  padding-right: 44px;
  margin: 30px 0;
`;

const TopSection = styled.div`
  display: flex;
`;

const Heading = styled.div`
  font-size: ${size.h4};
  font-weight: ${weight.semibold};
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
`;

const Subheading = styled.div`
  font-weight: ${weight.semibold};
  margin-bottom: 8px;
`;

const Text = styled.div`
  color: ${colors.gray80};
`;

const DataContainer = styled.div``;
