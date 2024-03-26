import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import RoomDetail from "../pages/RoomDetail";
import ReservationConfirm from "../pages/ReservationConfirm";
import Mypage from "../pages/Mypage";
import ReservationDetail from "../pages/ReservationDetail";
import Layout from "../components/Common/Layout";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="/num/detail" element={<RoomDetail />}></Route>
          <Route path="/num/reservate" element={<ReservationConfirm />}></Route>
          <Route path="/my" element={<Mypage />}></Route>
          <Route path="/reservation/pk" element={<ReservationDetail />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
