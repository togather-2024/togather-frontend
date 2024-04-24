import { useSearchParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useEffect } from "react";
import axios from "axios";
import { colors } from "../styles/colors";
import { IoMdHome } from "react-icons/io";

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
      <Link to={`/`}>
        <GoToHome>
          <IoMdHome />
          <p>홈으로</p>
        </GoToHome>
      </Link>
    </Wrapper>
  );
};

export default Fail;

const Wrapper = styled.div`
  margin-top: 32px;
`;

const Heading = styled.h1``;

const Text = styled.p``;

const GoToHome = styled.button`
  all: unset;
  margin-top: 50px;
  background-color: ${colors.point03};
  padding: 10px 30px;
  border-radius: 10px;
  color: ${colors.dark};
  cursor: pointer;
  width: fit-content;
  display: flex;
  gap: 5px;
  &:hover {
    background-color: ${colors.hover01};
  }
`;
