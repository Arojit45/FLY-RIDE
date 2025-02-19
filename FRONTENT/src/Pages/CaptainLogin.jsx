import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captaindata, setCaptaindata] = useState({});

  const SubmitEvent = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setCaptaindata({
      email: email,
      password: password,
    });
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          src="https://pngimg.com/d/uber_PNG24.png"
          alt="logo"
          className="w-20 mb-10"
        />
        <form
          onSubmit={(e) => {
            SubmitEvent(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">Whats your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base"
            type="text"
            placeholder="Phone number or email"
          />
          <h3 className="text-lg font-medium mb-2">Enter your password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold rounded mb-2 px-4 py-2  w-full text-lg placeholder:text-base">
            Log in
          </button>
        </form>
        <p className="text-center">
          Want to Be a Pilot?
          <Link to="/CapatainSignUp/" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/UserLogin"
          className="bg-[#d5622d] flex items-center justify-center text-white font-semibold rounded mb-5 px-4 py-2  w-full text-lg placeholder:text-base"
        >
          Sign in As User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
