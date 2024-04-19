import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";
import { size, weight } from "../styles/fonts";
import CancelModal from "../components/ReservationDetail/CancelModal";
import GetReservationDetail from "../components/ReservationDetail/GetReservationDetail";
import ReservatedRoomInfo from "../components/ReservationDetail/ReservatedRoomInfo";
import ReservationInfo from "../components/ReservationDetail/ReservationInfo";
import CancelContainer from "../components/ReservationDetail/CancelContainer";
import { useParams } from "react-router-dom";

const ReservationDetail = () => {
  const { reservationId } = useParams();
  const data = GetReservationDetail({ reservationId });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //CancelModal이 열렸을 때 스크롤 방지
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  function handleClick() {
    setIsOpen(true);
  }

  const paymentStatus =
    data?.partyRoomReservationDto?.paymentStatus === "COMPLETE"
      ? "결제 완료"
      : "취소 완료";

  return (
    <>
      {isOpen && <CancelModal setIsOpen={setIsOpen} />}
      <Container>
        <Heading>예약 상세 내역</Heading>
        <ReservatedRoomInfo data={data} />
        <ReservationInfo
          data={data}
          reservationId={reservationId}
          paymentStatus={paymentStatus}
        />
        {paymentStatus === "결제 완료" ? (
          <CancelContainer handleClick={handleClick} setIsOpen={setIsOpen} />
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default ReservationDetail;

const Container = styled.div`
  margin: 32px 0;
`;

const Heading = styled.h1`
  font-size: ${size.h2};
  font-weight: ${weight.semibold};
`;
