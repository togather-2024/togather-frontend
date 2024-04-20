import React from "react";
import styled from "@emotion/styled";
import HeartContainer from "../Likes/HeartContainer";
import { colors } from "../../../styles/colors";

const ImgContainer = ({ data }) => {
  const image = data?.partyRoomImageDtoList;
  const mainImg = image?.find((img) => img?.partyRoomImageType === "MAIN");
  const subImgList = image?.filter(
    (el) => el?.partyRoomImageType === "SECONDARY"
  );

  while (subImgList?.length < 4) {
    subImgList.push("0");
  }
  if (subImgList?.length > 4) {
    subImgList.splice(4);
  }

  return (
    <Container>
      <FirstImgContainer>
        <FirstImg src={mainImg?.imageFileName} alt="메인이미지" />
      </FirstImgContainer>
      <SubListContainer>
        {subImgList?.map((el, index) =>
          el === "0" ? (
            <SubImgContainer key={index}>
              <Blank />
            </SubImgContainer>
          ) : (
            <SubImgContainer key={index}>
              <SubImg src={el?.imageFileName} alt="서브이미지" />
            </SubImgContainer>
          )
        )}
      </SubListContainer>
    </Container>
  );
};

export default ImgContainer;

const Container = styled.div`
  margin: 32px 0;
  display: flex;
  position: relative;
  height: 400px;
  gap: 10px;
`;

const FirstImgContainer = styled.div`
  flex: 1;
`;
const FirstImg = styled.img`
  height: 100%;
  width: 100%;
  flex: 1;
  border-radius: 10px;
`;
const SubListContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: 1fr;
`;
const SubImgContainer = styled.div``;
const SubImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const Blank = styled.div`
  background-color: ${colors.hover02};
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;
