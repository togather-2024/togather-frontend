import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles/colors';
import { FaHeart } from "react-icons/fa";


const RoomDetail = () => {
    return (
        <>
                  <ImgContainer>
                   <HeartContainer><FaHeart size='15' /></HeartContainer> 
                <FirstImg></FirstImg>
                <SmallImgContainer>
                    <SmallImg />
                    <SmallImg />
                    <SmallImg />
                    <SmallImg />
                </SmallImgContainer></ImgContainer>
            
        </>
    );
};

export default RoomDetail;

const HeartContainer = styled.div`
   border-radius: 50%;
    padding: 10px;
    position: absolute;
    right: 0; 
    top: 10px; 
    display: flex; 
    justify-content: center;
    align-items: center; 
    display: inline-flex; 
    background-color:white ;
    margin-right:10px;
`;

const ImgContainer = styled.div`
display: flex;
position: relative;
height: 400px;
gap: 10px;
`

const FirstImg=styled.div`
    background-color: ${colors.gray30};
    flex-grow: 1;
    border-radius: 10px;
`
const SmallImgContainer = styled.div`
/* border: 1px solid black; */
flex-grow:1;
display: grid;
grid-template-columns: repeat(2,1fr);
gap:10px;
`
const SmallImg=styled.div`
        background-color: ${colors.gray30};
        border-radius: 10px;
`

