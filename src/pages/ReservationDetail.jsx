import React, { useState } from "react";
import styled from "@emotion/styled";
import { size, weight } from "../styles/fonts";
import GetReservationDetail from "../components/ReservationDetail/GetReservationDetail";
import ReservatedRoomInfo from "../components/ReservationDetail/ReservatedRoomInfo";
import ReservationInfo from "../components/ReservationDetail/ReservationInfo";
import CancelContainer from "../components/ReservationDetail/CancelContainer";
import { useParams } from "react-router-dom";
import LoadingContainer from "../components/Common/LoadingContainer";

const ReservationDetail = () => {
  const [loading, setLoading] = useState(true);
  const { reservationId } = useParams();
  const data = GetReservationDetail({ reservationId, setLoading });
  const paymentStatus =
    data?.partyRoomReservationDto?.paymentStatus === "COMPLETE"
      ? "결제 완료"
      : "취소 완료";

  return (
    <>
      <Container>
        <Heading>예약 상세 내역</Heading>
        {loading ? (
          <LoadingContainer />
        ) : (
          <>
            <ReservatedRoomInfo data={data} />
            <ReservationInfo
              data={data}
              reservationId={reservationId}
              paymentStatus={paymentStatus}
            />
            {paymentStatus === "결제 완료" ? (
              <CancelContainer data={data} />
            ) : (
              ""
            )}
          </>
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
