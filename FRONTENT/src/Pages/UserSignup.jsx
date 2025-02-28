import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/Usercontext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userdata, setUserdata] = useState({});
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users//register`,
      newUser
    );
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      navigate("/Home");
    }

    console.log(userdata);
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
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
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">Whats your Name?</h3>
          <div className=" flex gap-4 mb-5">
            <input
              required
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              className="bg-[#eeeeee] rounded  px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
            />
            <input
              required
              value={lastname}
              onChange={(e) => [setLastname(e.target.value)]}
              className="bg-[#eeeeee] rounded  px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
            />
          </div>
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
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have an account?
          <Link to="/UserLogin" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[12px] leading-tight">
          By Proceeding,you consent to get calls,Whatsapp or SMS
          messages,including by automated means,form Uber and its affilates to
          the number provided in this form.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
