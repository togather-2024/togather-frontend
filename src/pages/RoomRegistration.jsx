import React from "react";
import styled from "styled-components";

const Container = styled.div`
    max-width: 50vw;
    margin: 0 auto;
`;
const Title = styled.div`
    margin-top: 2rem;
    font-size: 2rem;
    padding: 2rem 3rem;
    text-align: center;
`;
const Box = styled.div`
    margin-top: 1rem;
    & > input {
        margin-bottom: 0.5rem;
    }
`;
const InputBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`;
const Button = styled.button`
    margin-left: 1rem;
    width: 6rem;
    height: 2.5rem;
    font-size: 0.8rem;
    background-color: white;
    border: 1px solid #bcef7b;
    border-radius: 0.4rem;
    color: rgba(0, 0, 0, 1);
    cursor: pointer;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    border-radius: 0.5rem;
`;

const Label = styled.div`
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const Divider = styled.div`
    margin-bottom: 20px;
`;

const PhotoInput = styled.div`
    margin-bottom: 20px;
`;

// const PhotoLabel = styled(Label)`
//     display: block;
//     margin-bottom: 5px;
// `;

const PhotoUpload = styled.input`
    display: block;
    margin-bottom: 10px;
`;

const RegistButton = styled.button`
    width: 10rem;
    height: 4rem;
    font-size: 1.5rem;
    background-color: white;
    border: 1px solid #bcef7b;
    border-radius: 0.4rem;
    color: rgba(0, 0, 0, 1);
    cursor: pointer;
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

const RoomRegistration = () => {
    return (
        <Container>
            <Title>숙소 등록</Title>
            <Box>
                <Label>숙소 이름</Label>
                <InputBox>
                    <Input
                        type="text"
                        placeholder="숙소 이름을 입력하세요."
                        name="roomName"
                    />
                    <Button>중복 확인</Button>
                </InputBox>
            </Box>

            <Divider />
            <Box>
                <Label>주소</Label>
                <InputBox>
                    <Input type="text" name="address" />
                    <Button>주소 입력</Button>
                </InputBox>

                <Input type="text" name="detailAddress" />
                <Input type="text" name="detailAddress2" />
            </Box>

            <Divider />
            <Label>사진</Label>
            <PhotoInput>
                <InputBox>
                    <PhotoUpload type="file" />
                    <PhotoUpload type="file" />
                    <PhotoUpload type="file" />
                </InputBox>
            </PhotoInput>
            <Divider />
            <Box>
                <Label>숙소 설명</Label>
                <TextArea />
            </Box>
            <Divider />
            <Box>
                <Label>인원 수</Label>
                <Input type="number" name="headCount" />
            </Box>
            <Divider />
            <Box>
                <Label>1박 당 가격</Label>
                <Input type="number" name="price" />
            </Box>
            <Divider />
            <Box>
                <Label>이용 가능 시간</Label>
                <Input type="text" name="minUse" />
                <Input type="text" name="maxUse" />
            </Box>
            <Divider />
            <Box>
                <Label>키워드 등록</Label>
                <InputBox>
                    <Input type="text" name="keyword"></Input>
                    <Button>키워드 등록</Button>
                </InputBox>
            </Box>
            <ButtonWrapper>
                <RegistButton>등록하기</RegistButton>
            </ButtonWrapper>
        </Container>
    );
};

export default RoomRegistration;
