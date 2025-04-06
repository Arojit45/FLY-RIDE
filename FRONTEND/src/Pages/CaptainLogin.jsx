import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/Captaincontext";
import axios from "axios";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {captain,setCaptain} = React.useContext(CaptainDataContext)
  const navigate = useNavigate()

  const SubmitEvent = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,captain
      );
      
      if(response.status === 200){
        const data = response.data;
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate("/Captainhome");

      }
    } catch (error) {
      console.log("Login was Failed")
    }
   setEmail("");
   setPassword("");
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
          <Link to="/CapatainSignUp" className="text-blue-600">
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
