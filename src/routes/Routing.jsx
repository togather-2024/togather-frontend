import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import MainPage from "../pages/MainPage";
import SignUp from "../pages/SignUp";

const Routing = () => {
    return (
        <>
            <Routes>
                <Route element={<Header />}>
                    <Route index element={<MainPage />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    {/* 숙소 정보 페이지 */}
                    {/* 예약 페이지 */}
                    {/* 예약 확인 페이지 */}
                    {/* 내 정보 페이지 */}
                </Route>
            </Routes>
        </>
    );
};

export default Routing;
