import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { colors } from "../../styles/colors";

const ModalContainer = ({ children }) => {
  return (
    <ModalBackdrop>
      <Container>{children}</Container>
    </ModalBackdrop>
  );
};

export default ModalContainer;

const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} ease-in-out 0.2s;
  z-index: 1;
`;
const Container = styled.div`
  border: 2px solid ${colors.white};
  background-color: ${colors.point04};
  border-radius: 20px;
  padding: 50px 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  position: relative;
`;
