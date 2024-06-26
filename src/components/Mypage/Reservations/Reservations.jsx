import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import ReservationItem from "./ReservationItem";
import GetReservationList from "./GetReservationList";
import LoadingContainer from "../../Common/LoadingContainer";

const Reservations = () => {
  const [active, setActive] = useState("all");
  const [loading, setLoading] = useState(true);
  const data = GetReservationList({ setLoading });
  const filteredData = data?.filter(
    (data) =>
      data?.partyRoomReservationDto?.paymentStatus !== "NOT_PAYED" &&
      data?.partyRoomReservationDto?.paymentStatus !== "PENDING"
  );

  const completeData = data?.filter(
    (data) => data?.partyRoomReservationDto?.paymentStatus === "COMPLETE"
  );

  const canceledData = data?.filter(
    (data) => data?.partyRoomReservationDto?.paymentStatus === "CANCELED"
  );

  const renderReservationList = (reservationData) =>
    reservationData?.map((data, index) => (
      <Link
        to={`/reservation/${data?.partyRoomReservationDto?.reservationId}`}
        key={index}
      >
        <ReservationItem data={data} />
      </Link>
    ));
  return (
    <Wrapper>
      <Nav>
        <Menu active={active === "all"} onClick={() => setActive("all")}>
          전체
        </Menu>
        <Menu
          active={active === "reservated"}
          onClick={() => setActive("reservated")}
        >
          완료된 예약
        </Menu>
        <Menu
          active={active === "canceled"}
          onClick={() => setActive("canceled")}
        >
          취소된 예약
        </Menu>
      </Nav>
      {!loading ? (
        <ListContainer>
          {data?.length === 0 ? "예약된 파티룸이 없습니다" : ""}
          {active === "all" && renderReservationList(filteredData)}
          {active === "reservated" && renderReservationList(completeData)}
          {active === "canceled" && renderReservationList(canceledData)}
        </ListContainer>
      ) : (
        <LoadingContainer />
      )}
    </Wrapper>
  );
};

export default Reservations;

const Wrapper = styled.div``;

const Nav = styled.ul`
  padding: 10px 0 0 10px;
  border-bottom: 1px solid ${colors.gray30};
  display: flex;
`;

const Menu = styled.li`
  cursor: pointer;
  padding: 7px 32px;
  border-bottom: ${({ active }) => (active ? "2px solid black" : "none")};
`;

const ListContainer = styled.ul`
  margin-top: 20px;
`;
