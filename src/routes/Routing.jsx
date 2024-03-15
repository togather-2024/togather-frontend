import { Route, Routes } from "react-router-dom";
import Header from "../components/Common/Header";
import MainPage from "../pages/MainPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import RoomDetail from "../pages/RoomDetail";
import ReservationConfirm from "../pages/ReservationConfirm";
import ReservationDetail from "../pages/ReservationDetail";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Header />}>
          <Route index element={<MainPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/num/detail" element={<RoomDetail />}></Route>
          <Route path="/num/reservate" element={<ReservationConfirm />}></Route>
          <Route path="/reservation/pk" element={<ReservationDetail />}></Route>
          {/* 내 정보 페이지 */}
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
