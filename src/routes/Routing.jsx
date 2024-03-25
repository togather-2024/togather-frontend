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
import ReservationDetail from "../pages/ReservationDetail";
import Layout from "../components/Common/Layout";

const Routing = () => {
<<<<<<< HEAD
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="/detail/:roomId" element={<RoomDetail />}></Route>
          <Route path="/num/reservate" element={<ReservationConfirm />}></Route>
          <Route path="/my/:menu" element={<Mypage />}></Route>
          <Route path="/reservation/pk" element={<ReservationDetail />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Route>
      </Routes>
    </>
  );
=======
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<MainPage />}></Route>
                    <Route path="signup" element={<SignUp />}></Route>
                    <Route path="signin" element={<SignIn />}></Route>
                    <Route path="/num/detail" element={<RoomDetail />}></Route>
                    <Route
                        path="/num/reservate"
                        element={<ReservationConfirm />}
                    ></Route>
                    <Route
                        path="/reservation/pk"
                        element={<ReservationDetail />}
                    ></Route>
                    {/* 내 정보 페이지 */}
                    <Route
                        path="/registration"
                        element={<Registration />}
                    ></Route>
                </Route>
            </Routes>
        </>
    );
>>>>>>> 37d8d09 (0325, pre commit)
};

export default Routing;
