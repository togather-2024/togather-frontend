import styled from "@emotion/styled";

const Container = styled.div`
    width: 150px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;
    padding: 0.7rem 0;
    position: absolute;
    background-color: white;


  // dropdown 위치 해당 부분 수정
  right: 5vw;
  z-index: 100;
`;
const Box = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 1);
  }
`;
const ProfileDropdown = ({ open }) => {
  const arr = ["찜한 목록", "메시지", "예약 관리", "내 정보", "로그아웃"];

  return (
    <>
      {open && (
        <Container>
          {arr.map((el) => {
            return <Box name={el}>{el}</Box>;
          })}
        </Container>
      )}
    </>
  );
};

export default ProfileDropdown;
