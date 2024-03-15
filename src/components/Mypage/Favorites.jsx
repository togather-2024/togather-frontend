import React from "react";
import styled from "@emotion/styled";
import Card from "../MainPage/MainContents/Card";

const Favorites = () => {
  const cardData = Array(10)
    .fill(0)
    .map((_, idx) => idx + 1);

  const favoritesList = cardData?.map((list, idx) => (
    <Card key={idx} photo={null} />
  ));
  return (
    <Wrapper>
      <Count>3개</Count>
      <FavoritesList>{favoritesList}</FavoritesList>
    </Wrapper>
  );
};

export default Favorites;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Count = styled.div``;

const FavoritesList = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  gap: 40px;
`;
