import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
    width: 240px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.3rem;
    padding: 0.7rem 0;
`;
const Box = styled.div`
    width: 100%;
    height: 1rem;
    text-align: center;
    padding: 1rem 0;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 1);
    }
    // & + & {
    //     border: 1px solid black;
    // }
`;
const ProfileDropdown = () => {
    const [open, setOpen] = useState(false);
    const arr = ["찜한 목록", "메시지", "예약 관리", "내 정보", "로그아웃"];

    return (
        <>
            <button
                onClick={() => {
                    setOpen(!open);
                }}
            >
                누르면
            </button>

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
