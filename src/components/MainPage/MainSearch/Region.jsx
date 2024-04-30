import styled from "@emotion/styled";

// clicked를 props로 받으면 될 듯 ?

const Region = ({ clicked, handleProvince, handleDistrict, province }) => {
    const provinces = [
        { id: 1, name: "서울" },
        { id: 2, name: "경기" },
    ];
    const districts = {
        서울: [
            "종로구",
            "중구",
            "용산구",
            "성동구",
            "광진구",
            "동대문구",
            "중랑구",
            "성북구",
            "강북구",
            "도봉구",
            "노원구",
            "은평구",
            "서대문구",
            "마포구",
            "양천구",
            "강서구",
            "구로구",
            "금천구",
            "영등포구",
            "동작구",
            "관악구",
            "서초구",
            "강남구",
            "송파구",
            "강동구",
        ],
        경기: [
            "수원시",
            "용인시",
            "성남시",
            "부천시",
            "화성시",
            "안산시",
            "안양시",
            "평택시",
            "시흥시",
            "시흥시",
            "김포시",
            "광주시",
            "광명시",
            "군포시",
            "하남시",
            "오산시",
            "이천시",
            "안성시",
            "의왕시",
            "양평군",
            "여주시",
            "과천시",
            "고양시",
            "남양주시",
            "파주시",
            "의정부시",
            "양주시",
            "구리시",
            "포천시",
            "동두천시",
            "가평군",
            "연천군",
        ],
    };

    return (
        <Container clicked={clicked}>
            <ContainerBox>
                {provinces.map((prov, idx) => (
                    <Element id={prov.name} key={idx} onClick={handleProvince}>
                        {prov.name}
                    </Element>
                ))}
            </ContainerBox>
            {province && (
                <ContainerBox>
                    {districts[province].map((dist, idx) => (
                        <Element id={dist} key={idx} onClick={handleDistrict}>
                            {dist}
                        </Element>
                    ))}
                </ContainerBox>
            )}
        </Container>
    );
};
const Container = styled.div`
    display: flex;
    position: absolute;
    background-color: white;
    z-index: 3;
    top: 150px;
    visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
    left: 20vw;
`;
const ContainerBox = styled.div`
    width: 10vw;
    height: 15vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    overflow: scroll;
    & + & {
        border-left: transparent;
    }
`;
const Element = styled.div`
    width: 100%;
    font-size: 16px;
    border-bottom: 1px solid black;
    line-height: 120%;
    padding: 10px;
    cursor: pointer;
    background-color: white;
    & + & {
        border-bottom: 1px solid black;
    }
    &:hover {
        background-color: #ebebeb;
    }
`;

export default Region;
