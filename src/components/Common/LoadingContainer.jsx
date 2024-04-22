import styled from "@emotion/styled";
import BeatLoader from "react-spinners/BeatLoader";
import { colors } from "../../styles/colors";

const LoadingContainer = () => {
  return (
    <Container>
      <BeatLoader color={colors.point01} />
    </Container>
  );
};

export default LoadingContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
