import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import RoomDetail from "../pages/RoomDetail";
import ReservationConfirm from "../pages/ReservationConfirm";
import Registration from "../pages/RoomRegistration";
import ReservationDetail from "../pages/ReservationDetail";
import Layout from "../components/Common/Layout";
import Mypage from "../pages/Mypage";
import Fail from "../pages/Fail";
import Success from "../pages/Success";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="/detail/:roomId" element={<RoomDetail />}></Route>
          <Route path="/reservate/:Id" element={<ReservationConfirm />}></Route>
          <Route path="/my/:menu" element={<Mypage />}></Route>
          <Route path="/fail" element={<Fail />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route
            path="/reservation/:reservationId"
            element={<ReservationDetail />}
          ></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
