import { Route, Routes } from "react-router-dom";
import Header from "../components/Common/Header";
import MainPage from "../pages/MainPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import RoomDetail from "../pages/RoomDetail";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<MainPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/detail" element={<RoomDetail />}></Route>
          {/* 예약 페이지 */}
          {/* 예약 확인 페이지 */}
          {/* 내 정보 페이지 */}
        </Route>
      </Routes>
    </>
  );

};

export default Routing;
