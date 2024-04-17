import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";
import { size, weight } from "../styles/fonts";
import { colors } from "../styles/colors";

const Success = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const paymentKey = searchParams.get("paymentKey");
  const token = localStorage.getItem("refresh_token");
  const orderName = data?.orderName;
  const paymentMethod = data?.method;
  const totalAmount = data?.totalAmount;

  useEffect(() => {
    const confirm = async () => {
      try {
        const res = await axios.get(
          `/payment/toss/success?paymentKey=${paymentKey}&orderId=${orderId}&amount=${amount}`,
          { headers: { Authorization: token } }
        );
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    confirm();
  }, []);

  return (
    <Wrapper>
      <Heading>예약이 완료되었습니다.</Heading>
      <InfoContainer>
        <SubHeading>결제 상세 정보</SubHeading>
        <Table>
          <Column>
            <Label>상품 이름</Label>
            <Text>{orderName}</Text>
          </Column>
          <Column>
            <Label>결제 방법</Label>
            <Text>{paymentMethod}</Text>
          </Column>
          <Column>
            <Label>결제 금액</Label>
            <Text>{totalAmount}</Text>
          </Column>
        </Table>
      </InfoContainer>
      <GoToReservationBtn>예약 내역 바로 가기 </GoToReservationBtn>
    </Wrapper>
  );
};

export default Success;

const Wrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Heading = styled.h1`
  font-size: ${size.h1};
  font-weight: ${weight.bold};
  padding-bottom: 16px;
  border-bottom: 1px solid ${colors.gray10};
`;

const GoToReservationBtn = styled.button`
  all: unset;
  background-color: ${colors.point01};
  padding: 10px 30px;
  border-radius: 10px;
  color: ${colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${colors.hover01};
  }
  width: fit-content;
`;

const InfoContainer = styled.div``;

const SubHeading = styled.h2`
  font-size: ${size.h3};
  font-weight: ${weight.semibold};
  align-self: flex-start;
`;

const Label = styled.p`
  font-weight: ${weight.semibold};
  background-color: ${colors.point04};
  padding: 12px;
  border-radius: 10px;
`;

const Text = styled.p`
  padding: 6px;
`;

const Column = styled.div`
  display: flex;
  gap: 12px;
`;

const Table = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 20px;
  border: 1px solid ${colors.point04};
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
`;
