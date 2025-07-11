import React from "react";
import { Navigate, Route, Routes,  } from "react-router-dom";
import Home from "./Pages/Home";
import Start from "./Pages/Start";
import UserLogin from "./Pages/UserLogin";
import UserSignup from "./Pages/UserSignup";
import CaptainSignup from "./Pages/CaptainSignup";
import CaptainLogin from "./Pages/CaptainLogin";
import UserProtectedWrapper from "./Pages/UserProtectedWrapper";
import UserLogout from "./Pages/UserLogout";
import Captainhome from "./Pages/Captainhome";
import CaptainProtectedWrapper from "./Pages/CaptainProtectedWrapper";
import BookingPage from "./Pages/BookingPage";
import WaitingDriver from "./Pages/WaitingDriver";
import Riding from "./Pages/Riding";
import RideDetails from "./Pages/RideDetails";
import CaptainRiding from "./Pages/CaptainRiding";
import RidingCap from "./Pages/RidingCap";
import Finishcaptain from "./Pages/Finishcaptain";
import Finishuser from "./Pages/Finishuser";


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Start" />} />
        <Route
          path="/Home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/userlogout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
        <Route path="/Start" element={<Start />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserSignup" element={<UserSignup />} />
        <Route path="/CapatainLogin" element={<CaptainLogin />} />
        <Route path="/CapatainSignUp" element={<CaptainSignup />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/WaitingDriver" element={<WaitingDriver />} />
        <Route path="/ride" element={<Riding />} />
        <Route path="/Ridedetail" element={<RideDetails />} />
        <Route path="/CaptainRiding" element={<CaptainRiding />} />
        <Route path="/ridecap" element={<RidingCap />} />
        <Route path="/finishcap" element={<Finishcaptain />} />
        <Route path="/finishuser" element={<Finishuser />} />
        <Route
          path="/Captainhome"
          element={
            <CaptainProtectedWrapper>
              <Captainhome />
            </CaptainProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
