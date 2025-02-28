import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Start from "./Pages/Start";
import UserLogin from "./Pages/UserLogin";
import UserSignup from "./Pages/UserSignup";
import CaptainSignup from "./Pages/CaptainSignup";
import CaptainLogin from "./Pages/CaptainLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Start" element={<Start />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserSignup" element={<UserSignup />} />
        <Route path="/CapatainLogin" element={<CaptainLogin />} />
        <Route path="/CapatainSignUp" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
