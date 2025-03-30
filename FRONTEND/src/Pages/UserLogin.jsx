import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/Usercontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userdata, setUserdata] = useState({});
  const {user, setUser} = React.useContext(UserDataContext);
  const navigate = useNavigate();

  const SubmitEvent = async (e) => {
    e.preventDefault();
    const userdata = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userdata
    );
    if(response.status === 200){
      const data = response.data;
      setUser(data.user);
      navigate("/Home");
    }
    setEmail("");
    setPassword("");
    
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
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
          New here?
          <Link to="/UserSignup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/CapatainLogin"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold rounded mb-5 px-4 py-2  w-full text-lg placeholder:text-base"
        >
          Sign in As Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
