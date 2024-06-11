import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { colors } from "../../styles/colors";
import { size, weight } from "../../styles/fonts";
import axios from "axios";
import { paymentRequestToServer } from "../../api/api";

const PaymentContainer = ({ data }) => {
  const [paymentWidget, setPaymentWidget] = useState(null);
  const paymentMethodsWidgetRef = useRef(null);

  const { Id } = useParams();
  const reservationId = Number(Id);
  const clientKey = process.env.REACT_APP_CLIENT_KEY;
  const customerKey = `ID${data?.partyRoomReservationDto?.reservationGuestDto?.memberSrl}`;
  const price = data?.partyRoomReservationDto?.totalPrice;
  const partyroomName =
    data?.partyRoomReservationDto?.partyRoomDto?.partyRoomName;

  //결제 위젯 초기화
  useEffect(() => {
    const fetchPaymentWidget = async () => {
      try {
        if (customerKey) {
          const loadedWidget = await loadPaymentWidget(clientKey, customerKey);
          setPaymentWidget(loadedWidget);
        }
      } catch (error) {
        console.error("Error fetching payment widget:", error);
      }
    };

    fetchPaymentWidget();
  }, [customerKey]);

  //위젯 렌더링
  useEffect(() => {
    if (paymentWidget == null) {
      return;
    }

    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      "#payment-widget",
      { value: price },
      { variantKey: "DEFAULT" }
    );

    paymentWidget.renderAgreement("#agreement", { variantKey: "AGREEMENT" });

    paymentMethodsWidgetRef.current = paymentMethodsWidget;
  }, [paymentWidget, price]);

  const requestToServer = async () => {
    const selectedPaymentMethod =
      paymentMethodsWidgetRef.current.getSelectedPaymentMethod().method;
    const requestBody = {
      amount: price,
      orderName: partyroomName,
      method: selectedPaymentMethod,
      successUrl: `${window.location.origin}/success`,
      failUrl: `${window.location.origin}/fail`,
      reservationId: reservationId,
    };

    try {
      const response = await paymentRequestToServer(requestBody);
      const data = await response.data;
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const requestToToss = async (Id) => {
    try {
      await paymentWidget?.requestPayment({
        orderId: Id,
        amount: price,
        orderName: partyroomName,
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  const handleRequest = async () => {
    try {
      const request1 = await requestToServer();
      const orderId = request1.orderId;
      await requestToToss(orderId);
    } catch (error) {
      console.error(error); // 요청 실패 시 처리
    }
  };

  return (
    <Wrapper>
      <PaymentMethod id="payment-widget"></PaymentMethod>
      <Agreement id="agreement"></Agreement>
      <PaymentButton onClick={handleRequest}>결제하기</PaymentButton>
    </Wrapper>
  );
};
export default PaymentContainer;

const Wrapper = styled.div`
  margin-right: 40px;
  margin-bottom: 30px;
  border: 1px solid ${colors.gray10};
  padding: 4px;
  border-radius: 10px;
`;

const PaymentMethod = styled.div``; //결제ui

const Agreement = styled.div``; //이용약관ui

const PaymentButton = styled.button`
  all: unset;
  background-color: ${colors.point01};
  padding: 10px 30px;
  text-align: center;
  margin: 10px 20px 20px;
  border-radius: 10px;
  font-size: ${size.body02};
  font-weight: ${weight.semibold};
  color: ${colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${colors.hover01};
  }
`;
