import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import RoomDetail from "../pages/RoomDetail";
import ReservationConfirm from "../pages/ReservationConfirm";
<<<<<<< HEAD
import Registration from "../pages/RoomRegistration";
import ReservationDetail from "../pages/ReservationDetail";
import Layout from "../components/Common/Layout";
import Mypage from "../pages/Mypage";
=======
import Layout from "../components/Common/Layout";
>>>>>>> d1072e8 ([feat] Outlet 적용 스타일 수정)

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
<<<<<<< HEAD
          <Route path="/detail/:roomId" element={<RoomDetail />}></Route>
          <Route path="/num/reservate" element={<ReservationConfirm />}></Route>
          <Route path="/my/:menu" element={<Mypage />}></Route>
          <Route path="/reservation/pk" element={<ReservationDetail />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
=======
          <Route path="/num/detail" element={<RoomDetail />}></Route>
          <Route path="/num/reservate" element={<ReservationConfirm />}></Route>
          {/* 예약 확인 페이지 */}
          {/* 내 정보 페이지 */}
>>>>>>> d1072e8 ([feat] Outlet 적용 스타일 수정)
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
