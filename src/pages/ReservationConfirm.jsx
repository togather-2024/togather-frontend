import { useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { size, weight } from "../styles/fonts";
import ReservateInfo from "../components/ReservationConfirm/ReservateInfo";
import PriceInfo from "../components/ReservationConfirm/PriceInfo";
import PaymentContainer from "../components/ReservationConfirm/PaymentContainer";
import GetResInfo from "../components/ReservationConfirm/GetResInfo";

const ReservationConfirm = () => {
  const reservationId = Number(useParams().Id);
  const data = GetResInfo(reservationId);

  return (
    <>
      <Title>확인 및 결제</Title>
      <Container>
        <Left>
          <ReservateInfo data={data} />
          <PaymentContainer data={data} />
        </Left>
        <Right>
          <PriceInfo data={data} />
        </Right>
      </Container>
    </>
  );
};

export default ReservationConfirm;

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
`;
const Left = styled.div`
  /* border: 1px solid blue; */
  flex: 2;
`;

const Title = styled.div`
  font-size: ${size.h2};
  font-weight: ${weight.semibold};
  margin-top: 32px;
`;

const Right = styled.div`
  /* border: 1px solid green; */
  flex: 1;
`;
