import React, { useState } from "react";
import styled from "@emotion/styled";
import Card from "../../MainPage/MainContents/Card";
import GetBookmark from "./GetBookmark";
import LoadingContainer from "../../Common/LoadingContainer";

const Bookmark = () => {
  const [loading, setLoading] = useState(true);
  const cardData = GetBookmark({ setLoading });

  const favoritesList = cardData?.map((item, idx) => (
    <Card key={idx} info={item} />
  ));
  return (
    <Wrapper>
      <Count>{cardData?.length || 0}개</Count>
      {loading ? (
        <LoadingContainer />
      ) : (
        <BookmarkedList>{favoritesList}</BookmarkedList>
      )}
    </Wrapper>
  );
};

export default Bookmark;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Count = styled.div``;

const BookmarkedList = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  gap: 40px;
`;
