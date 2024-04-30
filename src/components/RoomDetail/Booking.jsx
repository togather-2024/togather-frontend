import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { useRecoilValue, useRecoilState } from "recoil";
import { colors } from "../../styles/colors";
import { size, weight } from "../../styles/fonts";
import TimeContainer from "./Time/TimeContainer";
import { timeRangeState } from "../../recoil/atoms/timeRangeState";
import DateContainer from "./Date/DateContainer";
import PersonnelContainer from "./Personnel/PersonnelContainer";
import { counterState } from "../../recoil/atoms/counterState";
import { selectedDateState } from "../../recoil/atoms/selectedDate";

const Booking = ({ data, roomId }) => {
  const navigate = useNavigate();
  const [selectedRange, setSelectedRange] = useRecoilState(timeRangeState);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const token = localStorage.getItem("refresh_token");
  const guestCount = useRecoilValue(counterState);
  const operationDays = data?.operationDays;
  const daysOfWeek = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  const price = data?.partyRoomDto?.price;
  const totalPrice = price * (selectedRange.end - selectedRange.start + 1);
  function priceToString(price) {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const startTime = selectedRange.start + data?.partyRoomDto?.openingHour;
  const endTime = selectedRange.end + data?.partyRoomDto?.openingHour + 1;

  //현재 날짜로부터 가장 가까운 운영 요일을 디폴트로 선택
  useEffect(() => {
    if (data) {
      const operationDayArr = operationDays?.map((el) => el.operationDay);
      const currentDate = selectedDate.getDay(); //현재 날짜의 요일
      const operationDaysToNum = operationDayArr?.map((el) =>
        daysOfWeek.indexOf(el)
      );
      //요일을 숫자로 변환
      operationDaysToNum.sort(); //운영 요일 정렬

      //현재 요일이 운영 요일의 마지막 요일보다 큰 경우
      if (currentDate > operationDaysToNum.at(-1)) {
        const updatedDate = new Date(
          date.setDate(date.getDate() + 7 - currentDate)
        );
        setSelectedDate(updatedDate);
      } else if (!operationDaysToNum.includes(currentDate)) {
        const updatedDate = new Date(
          date.setDate(
            date.getDate() +
              operationDaysToNum.find((num) => num > currentDate) -
              currentDate
          )
        );
        setSelectedDate(updatedDate);
      }
    }
  }, [data]);

  const date = useRecoilValue(selectedDateState);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`; //yyyy-mm--dd로 포맷

  const startTimeWithDate = new Date(`${formattedDate} ${startTime}:00:00`);
  const endTimeWithDate = new Date(`${formattedDate} ${endTime}:00:00`);

  const handleReservationRegister = async () => {
    try {
      const reservationData = {
        partyRoomId: roomId,
        guestCount: guestCount,
        startTime: startTimeWithDate,
        endTime: endTimeWithDate,
        totalPrice: totalPrice,
      };

      const url = "/partyroom/reservation/registration";
      const headers = {
        Authorization: token,
      };
      const response = await axios.post(url, reservationData, {
        headers: headers,
      });
      setSelectedRange({ start: null, end: null });
      navigate(`/reservate/${response.data}`);
    } catch (error) {
      console.error("서버 요청 중 오류 발생:", error);
    }
  };
  return (
    <Container>
      <SelectContainer>
        <PricePerTimeContainer>
          <PricePerTime>₩ {priceToString(price)}</PricePerTime>
          <Text>/ 시간</Text>
        </PricePerTimeContainer>
        <DateContainer data={data} />
        <TimeContainer data={data} />
        <PersonnelContainer data={data?.partyRoomDto} />
        <Total>
          <Title>총 결제 금액</Title>
          <Text>
            ₩ {price} * {selectedRange.end - selectedRange.start + 1}시간
          </Text>
        </Total>
      </SelectContainer>
      <Line />
      <TotalPrice>₩ {priceToString(totalPrice)}</TotalPrice>
      <BookButton onClick={handleReservationRegister}>예약하기</BookButton>
    </Container>
  );
};

export default Booking;

const Container = styled.div`
  border: 1px solid ${colors.point03};
  padding: 30px;
  border-radius: 30px;
  margin-bottom: 32px;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const PricePerTimeContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const PricePerTime = styled.div`
  font-size: ${size.body02};
  font-weight: ${weight.bold};
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalPrice = styled.div`
  font-size: ${size.h3};
  font-weight: ${weight.semibold};
  color: ${colors.point01};
  display: flex;
  justify-content: flex-end;
`;

const Text = styled.div`
  font-weight: ${weight.normal};
`;

const Title = styled.div`
  font-weight: ${weight.semibold};
`;

const Line = styled.hr`
  margin: 18px 0;
  border: 1px solid ${colors.gray10};
`;

const BookButton = styled.button`
  all: unset;
  background-color: ${colors.point01};
  width: 100%;
  padding: 10px 0;
  text-align: center;
  margin-top: 40px;
  border-radius: 10px;
  font-size: ${size.body02};
  font-weight: ${weight.semibold};
  color: ${colors.white};
  cursor: pointer;
`;
