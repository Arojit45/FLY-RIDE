import React from "react";
import bgm from "../assets/Homescreen.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Home = () => {
  return (
    <div
      className="h-screen  flex pt-8  justify-between  flex-col w-full bg-red-400 "
      style={{
        backgroundImage: `url(${bgm})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <img
        className="w-20 ml-8"
        src={Logo}
        alt=""
      />
      <div className="bg-white py-5 px-4 pb-7     ">
        <h2 className="text-2xl font-bold ">Get Started With Fly Ride</h2>
        <Link
          to="/UserLogin"
          className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 "
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
