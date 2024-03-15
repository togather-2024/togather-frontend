import { Route, Routes } from "react-router-dom";
import Header from "../components/Common/Header";
import MainPage from "../pages/MainPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import RoomDetail from "../pages/RoomDetail";
import ReservationConfirm from "../pages/ReservationConfirm";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/num/detail" element={<RoomDetail />}></Route>
        <Route path="/num/reservate" element={<ReservationConfirm />}></Route>
        {/* 예약 확인 페이지 */}
        {/* 내 정보 페이지 */}
      </Routes>
    </>
  );
};

export default Routing;
