import styled from "@emotion/styled";

const Region = styled.input`
    width: 177px;
    height: 80px;
    border-radius: 30px 0px 0px 30px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &:hover {
        background-color: #ebebeb;
    }

    &::placeholder {
        content: "지역\n지역을 선택하세요.";
    }
`;
