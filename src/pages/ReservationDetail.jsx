import React from "react";
import styled from "@emotion/styled";
import { size, weight } from "../styles/fonts";
import { colors } from "../styles/colors";
import { IoLocationSharp } from "react-icons/io5";

const ReservationDetail = () => {
  return (
    <Container>
      <Heading>예약 상세 내역</Heading>
      <RoomInfo>
        <RoomImg />
        <TextInfo>
          <RoomName>공간 이름</RoomName>
          <Region>
            <IoLocationSharp /> 지역
          </Region>
          <HostProfile>
            <HostImg></HostImg>
            <TextInfo>
              <HostName>홍길동</HostName>
              <Caption>호스트</Caption>
            </TextInfo>
          </HostProfile>
          <Button>상세 보기</Button>
        </TextInfo>
      </RoomInfo>
      <ReserveInfo>
        <Section>
          <LabelContainer>
            <InfoLabel>예약자명</InfoLabel>
            <InfoLabel>예약일</InfoLabel>
            <InfoLabel>예약 번호</InfoLabel>
          </LabelContainer>
          <TextContainter>
            <Text>홍길동</Text>
            <Text>2024.03.06</Text>
            <Text>209209090909</Text>
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
            <Text>2024.03.10</Text>
            <Text>12:00-8:00(8시간)</Text>
            <Text>4명</Text>
            <Text>00000000</Text>
          </TextContainter>
        </Section>
        <Section>
          <LabelContainer>
            <InfoLabel>결제 상태</InfoLabel>
            <InfoLabel>총 결제 금액</InfoLabel>
          </LabelContainer>
          <TextContainter>
            <Text>결제 완료</Text>
            <RedText>₩80,000</RedText>
          </TextContainter>
        </Section>
      </ReserveInfo>
    </Container>
  );
};

export default ReservationDetail;

const Container = styled.div`
  margin: 32px 0;
  /* border: 1px solid red; */
`;

const Heading = styled.h1`
  font-size: ${size.h2};
  font-weight: ${weight.semibold};
`;

const RoomInfo = styled.div`
  margin: 40px 0;
  display: flex;
  gap: 32px;
`;

const RoomImg = styled.div`
  width: 240px;
  height: 240px;
  background-color: ${colors.gray30};
  border-radius: 20px;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const RoomName = styled.div`
  font-size: ${size.h2};
  font-weight: ${weight.semibold};
  margin-bottom: 8px;
`;

const Region = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const HostProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background: linear-gradient(
    0deg,
    rgba(197, 223, 185, 1) 0%,
    rgba(248, 255, 217, 1) 100%
  );
  border-radius: 36px;
  gap: 12px;
  width: fit-content;
`;

const HostImg = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${colors.gray30};
  border-radius: 50%;
`;

const HostName = styled.div`
  font-weight: ${weight.semibold};
`;

const Caption = styled.div`
  font-size: ${size.caption};
  margin-top: 8px;
`;

const Button = styled.button`
  all: unset;
  width: fit-content;
  display: flex;
  margin-top: auto;
  color: ${colors.white};
  padding: 12px;
  border-radius: 10px;
  background-color: ${colors.point02};
  cursor: pointer;
  &:hover {
    background-color: ${colors.hover01};
  }
`;

const ReserveInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Section = styled.div`
  border-left: 2px solid ${colors.point02};
  padding-left: 44px;
  display: flex;
  gap: 80px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100px;
`;

const InfoLabel = styled.div`
  font-weight: ${weight.medium};
`;

const TextContainter = styled(LabelContainer)`
  width: auto;
`;

const Text = styled.div``;

const RedText = styled.div`
  color: #f24b4b;
`;
