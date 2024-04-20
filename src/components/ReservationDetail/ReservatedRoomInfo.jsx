import styled from "@emotion/styled";
import { size, weight } from "../../styles/fonts";
import { colors } from "../../styles/colors";
import { IoLocationSharp } from "react-icons/io5";
import profile from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReservatedRoomInfo = ({ data }) => {
  const { reservationId } = useParams();
  const [qualified, setQualified] = useState(false);
  const token = localStorage.getItem("refresh_token");
  useEffect(() => {
    const checkQualification = async () => {
      try {
        const res = await axios.post(
          `/api/review/check/qualification?partyRoomReservationId=${Number(reservationId)}`,
          "",
          {
            headers: { Authorization: token },
          }
        );
        setQualified(res.data);
        console.log(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    checkQualification();
  }, []);

  const navigate = useNavigate();
  const roomId = data?.partyRoomReservationDto?.partyRoomDto?.partyRoomId;
  const roomName = data?.partyRoomReservationDto?.partyRoomDto?.partyRoomName;
  const region = data?.partyRoomLocationDto?.sigungu;
  const hostName =
    data?.partyRoomReservationDto?.partyRoomDto?.partyRoomHost?.memberName;
  const roomImg = data?.partyRoomImageDto?.imageFileName;
  const hostImg =
    data?.partyRoomReservationDto?.partyRoomDto?.partyRoomHost?.profilePicFile;
  return (
    <Container>
      <RoomImg src={roomImg} alt="partyroomimg" />
      <TextInfo>
        <RoomName>{roomName}</RoomName>
        <Region>
          <IoLocationSharp /> {region}
        </Region>
        <HostProfile>
          {hostImg ? (
            <HostImg src={hostImg} alt="hostImg" />
          ) : (
            <HostImg src={profile} alt="hostImg" />
          )}
          <TextInfo>
            <HostName>{hostName}</HostName>
            <Caption>호스트</Caption>
          </TextInfo>
        </HostProfile>
        <Button onClick={() => navigate(`/detail/${roomId}`)}>상세 보기</Button>
        {qualified ? (
          <ReviewButton>
            <FaPen color="#ffffff" />
            <p>후기 작성하기</p>
          </ReviewButton>
        ) : (
          ""
        )}
      </TextInfo>
    </Container>
  );
};

export default ReservatedRoomInfo;

const Container = styled.div`
  margin: 40px 0;
  display: flex;
  gap: 32px;
`;

const RoomImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const RoomName = styled.div`
  font-size: ${size.h2};
  font-weight: ${weight.semibold};
  margin-bottom: 8px;
`;

const Region = styled.div`
  color: ${colors.gray50};
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const HostProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px 12px 12px;
  background: linear-gradient(
    0deg,
    rgba(197, 223, 185, 1) 0%,
    rgba(248, 255, 217, 1) 100%
  );
  border-radius: 36px;
  gap: 12px;
  width: fit-content;
`;

const HostImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const HostName = styled.div`
  font-weight: ${weight.semibold};
`;

const Caption = styled.div`
  font-size: ${size.caption};
  margin-top: 8px;
`;

const Button = styled.button`
  all: unset;
  width: fit-content;
  display: flex;
  margin-top: auto;
  color: ${colors.white};
  padding: 12px;
  border-radius: 10px;
  background-color: ${colors.point02};
  cursor: pointer;
  &:hover {
    background-color: ${colors.hover01};
  }
`;

const ReviewButton = styled(Button)`
  background-color: ${colors.dark};
  display: flex;
  gap: 12px;
`;
