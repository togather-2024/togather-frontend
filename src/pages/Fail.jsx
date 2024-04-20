import { useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";
import { useEffect } from "react";
import axios from "axios";

const Fail = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const message = searchParams.get("message");
  const orderId = searchParams.get("orderId");
  const token = localStorage.getItem("refresh_token");
  useEffect(() => {
    const confirm = async () => {
      try {
        if (
          code === "PAY_PROCESS_CANCELED" ||
          code === "PAY_PROCESS_ABORTED" ||
          code === "REJECT_CARD_COMPANY"
        ) {
          await axios.get(
            `/payment/toss/fail?code=${code}&message=${message}&orderId=${orderId}`,

            { headers: { Authorization: token } }
          );
        }
      } catch (e) {
        console.log(e);
      }
    };
    confirm();
  }, []);

  return (
    <Wrapper>
      <Heading>결제 실패</Heading>
      <Text>{`에러 코드: ${code}`}</Text>
      <Text>{`실패 사유: ${message}`}</Text>
    </Wrapper>
  );
};

export default Fail;

const Wrapper = styled.div``;

const Heading = styled.h1``;

const Text = styled.p``;
